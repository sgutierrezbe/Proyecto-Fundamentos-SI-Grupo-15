-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 20-03-2024 a las 23:05:58
-- Versión del servidor: 8.2.0
-- Versión de PHP: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `si_ecommerce`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gpu`
--

DROP TABLE IF EXISTS `gpu`;
CREATE TABLE IF NOT EXISTS `gpu` (
  `modelo` varchar(45) NOT NULL,
  `marca` varchar(45) DEFAULT NULL,
  `fabricante` varchar(45) DEFAULT NULL,
  `vram` varchar(45) DEFAULT NULL,
  `velocidad` int DEFAULT NULL,
  `raytracing` varchar(2) DEFAULT NULL,
  `PRODUCTO_idproducto` int NOT NULL,
  PRIMARY KEY (`modelo`,`PRODUCTO_idproducto`),
  KEY `fk_GPU_PRODUCTO1_idx` (`PRODUCTO_idproducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `gpu`
--

INSERT INTO `gpu` (`modelo`, `marca`, `fabricante`, `vram`, `velocidad`, `raytracing`, `PRODUCTO_idproducto`) VALUES
('GeForce RTX 3060', 'NVIDIA', 'NVIDIA', '8 GB GDDR6', 2352, 'Sí', 2),
('Radeon RX 6600 XT', 'AMD', 'AMD', '12 GB GDDR6', 1325, 'Sí', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

DROP TABLE IF EXISTS `pedido`;
CREATE TABLE IF NOT EXISTS `pedido` (
  `idpedido` int NOT NULL,
  `fecha` varchar(45) NOT NULL,
  `USUARIO_idusuario` int NOT NULL,
  PRIMARY KEY (`idpedido`,`USUARIO_idusuario`),
  KEY `fk_PEDIDO_USUARIO1_idx` (`USUARIO_idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_has_producto`
--

DROP TABLE IF EXISTS `pedido_has_producto`;
CREATE TABLE IF NOT EXISTS `pedido_has_producto` (
  `PEDIDO_idpedido` int NOT NULL,
  `PRODUCTO_idproducto` int NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`PEDIDO_idpedido`,`PRODUCTO_idproducto`),
  KEY `fk_PEDIDO_has_PRODUCTO_PRODUCTO1_idx` (`PRODUCTO_idproducto`),
  KEY `fk_PEDIDO_has_PRODUCTO_PEDIDO1_idx` (`PEDIDO_idpedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `idproducto` int NOT NULL,
  `precio` int DEFAULT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`idproducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idproducto`, `precio`, `stock`) VALUES
(1, 399, 2),
(2, 439, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `idusuario` int NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `correo` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `rol` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idusuario`, `nombre`, `correo`, `password`, `rol`, `direccion`) VALUES
(1, 'admin', 'admin@gmail.com', 'admin123', 'admin', NULL),
(2, 'user', 'user@gmail.com', 'user123', 'user', NULL);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `gpu`
--
ALTER TABLE `gpu`
  ADD CONSTRAINT `fk_GPU_PRODUCTO1` FOREIGN KEY (`PRODUCTO_idproducto`) REFERENCES `producto` (`idproducto`);

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `fk_PEDIDO_USUARIO1` FOREIGN KEY (`USUARIO_idusuario`) REFERENCES `usuario` (`idusuario`);

--
-- Filtros para la tabla `pedido_has_producto`
--
ALTER TABLE `pedido_has_producto`
  ADD CONSTRAINT `fk_PEDIDO_has_PRODUCTO_PEDIDO1` FOREIGN KEY (`PEDIDO_idpedido`) REFERENCES `pedido` (`idpedido`),
  ADD CONSTRAINT `fk_PEDIDO_has_PRODUCTO_PRODUCTO1` FOREIGN KEY (`PRODUCTO_idproducto`) REFERENCES `producto` (`idproducto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
