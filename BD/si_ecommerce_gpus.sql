-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-08-2024 a las 04:13:03
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
('GeForce GT 1030', 'XFX', 'NVIDIA', '2GB', NULL, NULL, 35),
('GeForce GTX 1050', 'MSI', 'NVIDIA', '2GB', NULL, NULL, 37),
('GeForce GTX 1050 3GB', 'ZOTAC', 'NVIDIA', '3GB', NULL, NULL, 61),
('GeForce GTX 1050 Mobile', 'ZOTAC', 'NVIDIA', '2GB', NULL, NULL, 49),
('GeForce GTX 1050 Mobile 3GB', 'ZOTAC', 'NVIDIA', '3GB', NULL, NULL, 73),
('GeForce GTX 1050 Mobile 3GB', 'MSI', 'NVIDIA', '3GB', NULL, NULL, 79),
('GeForce GTX 1050 Ti', 'ZOTAC', 'NVIDIA', '4GB', NULL, NULL, 13),
('GeForce GTX 1050 Ti 4GB', 'MSI', 'NVIDIA', '4GB', NULL, NULL, 69),
('GeForce GTX 1050 Ti 4GB', 'EVGA', 'NVIDIA', '4GB', NULL, NULL, 75),
('GeForce GTX 1060', 'NVIDIA', 'NVIDIA', '6GB', NULL, NULL, 17),
('GeForce GTX 1060 Mobile', 'ZOTAC', 'NVIDIA', '6GB', NULL, NULL, 55),
('GeForce GTX 1070', 'MSI', 'NVIDIA', '8GB', NULL, NULL, 51),
('GeForce GTX 1070 Ti', 'XFX', 'NVIDIA', '8GB', NULL, NULL, 27),
('GeForce GTX 1080', 'ASUS', 'NVIDIA', '8GB', NULL, NULL, 33),
('GeForce GTX 1080 Ti', 'NVIDIA', 'NVIDIA', '11GB', NULL, NULL, 9),
('GeForce GTX 1650', 'EVGA', 'NVIDIA', '4GB', NULL, NULL, 31),
('GeForce GTX 1650 4GB', 'EVGA', 'NVIDIA', '4GB', NULL, NULL, 65),
('GeForce GTX 1650 GDDR6', 'ASUS', 'NVIDIA', '4GB', NULL, NULL, 67),
('GeForce GTX 1650 Mobile', 'ASUS', 'NVIDIA', '4GB', NULL, NULL, 43),
('GeForce GTX 1650 SUPER', 'ASUS', 'NVIDIA', '4GB', NULL, NULL, 29),
('GeForce GTX 1650 Ti Mobile', 'MSI', 'NVIDIA', '4GB', NULL, NULL, 47),
('GeForce GTX 1660', 'EVGA', 'NVIDIA', '6GB', NULL, NULL, 25),
('GeForce GTX 1660', 'XFX', 'NVIDIA', '6GB', NULL, NULL, 53),
('GeForce GTX 1660 SUPER', 'EVGA', 'NVIDIA', '6GB', NULL, NULL, 11),
('GeForce GTX 1660 Ti Mobile', 'ZOTAC', 'NVIDIA', '6GB', NULL, NULL, 41),
('GeForce MX130', 'ASUS', 'NVIDIA', '2GB', NULL, NULL, 77),
('GeForce MX150', 'MSI', 'NVIDIA', '2GB', NULL, NULL, 71),
('GeForce MX250', 'XFX', 'NVIDIA', '2GB', NULL, NULL, 63),
('GeForce MX330', 'MSI', 'NVIDIA', '2GB', NULL, NULL, 59),
('GeForce MX350', 'ASUS', 'NVIDIA', '2GB', NULL, NULL, 57),
('GeForce RTX 2060 Super', 'MSI', 'NVIDIA', '8GB', NULL, NULL, 19),
('GeForce RTX 2070', 'XFX', 'NVIDIA', '8GB', NULL, NULL, 45),
('GeForce RTX 2080 Super', 'ASUS', 'NVIDIA', '8GB', NULL, NULL, 15),
('GeForce RTX 2080 Ti', 'MSI', 'NVIDIA', '11GB', NULL, NULL, 5),
('GeForce RTX 3050', 'EVGA', 'NVIDIA', '8GB', NULL, NULL, 39),
('GeForce RTX 3060', 'NVIDIA', 'NVIDIA', '8 GB GDDR6', 2352, 'Sí', 2),
('GeForce RTX 3060', 'NVIDIA', 'NVIDIA', '12GB', NULL, NULL, 23),
('GeForce RTX 3060 Ti', 'ASUS', 'NVIDIA', '8GB', NULL, NULL, 3),
('GeForce RTX 3070', 'MSI', 'NVIDIA', '8GB', NULL, NULL, 7),
('GeForce RTX 3090', 'EVGA', 'NVIDIA', '24GB', NULL, NULL, 21),
('GTX 1660 Ti', 'MSI', 'NVIDIA', '6GB', NULL, NULL, 81),
('Radeon RX 460', 'XFX', 'AMD', '4GB', NULL, NULL, 40),
('Radeon RX 5300', 'ZOTAC', 'AMD', '3GB', NULL, NULL, 36),
('Radeon RX 5300M', 'ASUS', 'AMD', '3GB', NULL, NULL, 60),
('Radeon RX 540X', 'ASUS', 'AMD', '4GB', NULL, NULL, 72),
('Radeon RX 540X', 'XFX', 'AMD', '4GB', NULL, NULL, 78),
('Radeon RX 550', 'MSI', 'AMD', '4GB', NULL, NULL, 34),
('Radeon RX 5500', 'MSI', 'AMD', '8GB', NULL, NULL, 52),
('Radeon RX 5500 XT', 'MSI', 'AMD', '8GB', NULL, NULL, 14),
('Radeon RX 5500 XT 4G', 'XFX', 'AMD', '4GB', NULL, NULL, 58),
('Radeon RX 5500 XT 8G', 'MSI', 'AMD', '8GB', NULL, NULL, 56),
('Radeon RX 5500M', 'MSI', 'AMD', '4GB', NULL, NULL, 42),
('Radeon RX 550X', 'ASUS', 'AMD', '4GB', NULL, NULL, 50),
('Radeon RX 550X', 'EVGA', 'AMD', '4GB', NULL, NULL, 66),
('Radeon RX 550X', 'EVGA', 'AMD', '4GB', NULL, NULL, 70),
('Radeon RX 550X', 'MSI', 'AMD', '4GB', NULL, NULL, 76),
('Radeon RX 560', 'ZOTAC', 'AMD', '4GB', NULL, NULL, 32),
('Radeon RX 560', 'ASUS', 'AMD', '4GB', NULL, NULL, 64),
('Radeon RX 5600 XT', 'XFX', 'AMD', '6GB', NULL, NULL, 18),
('Radeon RX 5600M', 'EVGA', 'AMD', '6GB', NULL, NULL, 44),
('Radeon RX 560D', 'ASUS', 'AMD', '4GB', NULL, NULL, 38),
('Radeon RX 560X', 'MSI', 'AMD', '4GB', NULL, NULL, 62),
('Radeon RX 560X', 'ZOTAC', 'AMD', '4GB', NULL, NULL, 68),
('Radeon RX 560X', 'XFX', 'AMD', '4GB', NULL, NULL, 74),
('Radeon RX 570', 'EVGA', 'AMD', '8GB', NULL, NULL, 16),
('Radeon RX 5700', 'XFX', 'AMD', '8GB', NULL, NULL, 80),
('Radeon RX 5700 XT', 'ASUS', 'AMD', '8GB', NULL, NULL, 20),
('Radeon RX 570X', 'EVGA', 'AMD', '4GB', NULL, NULL, 48),
('Radeon RX 580', 'XFX', 'AMD', '8GB', NULL, NULL, 12),
('Radeon RX 580 2048SP', 'ZOTAC', 'AMD', '4GB', NULL, NULL, 46),
('Radeon RX 590', 'EVGA', 'AMD', '8GB', NULL, NULL, 30),
('Radeon RX 590 GME', 'ASUS', 'AMD', '8GB', NULL, NULL, 54),
('Radeon RX 6600 XT', 'AMD', 'AMD', '12 GB GDDR6', 1325, 'Sí', 1),
('Radeon RX 6600 XT', 'ZOTAC', 'AMD', '8GB', NULL, NULL, 8),
('Radeon RX 6700 XT', 'ASUS', 'AMD', '12GB', NULL, NULL, 10),
('Radeon RX 6800', 'MSI', 'AMD', '16GB', NULL, NULL, 28),
('Radeon RX 6800 XT', 'NVIDIA', 'AMD', '16GB', NULL, NULL, 4),
('Radeon RX 6900 XT', 'EVGA', 'AMD', '16GB', NULL, NULL, 6),
('Radeon RX Vega 56', 'ZOTAC', 'AMD', '8GB', NULL, NULL, 26),
('Radeon RX Vega 64', 'ASUS', 'AMD', '8GB', NULL, NULL, 24),
('Radeon VII', 'ZOTAC', 'AMD', '16GB', NULL, NULL, 22);

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
(2, 439, 0),
(3, 283, 3),
(4, 397, 4),
(5, 303, 6),
(6, 429, 8),
(7, 269, 8),
(8, 484, 1),
(9, 256, 7),
(10, 423, 0),
(11, 365, 6),
(12, 274, 0),
(13, 267, 2),
(14, 460, 7),
(15, 478, 5),
(16, 301, 6),
(17, 428, 1),
(18, 292, 1),
(19, 440, 1),
(20, 359, 9),
(21, 300, 8),
(22, 487, 4),
(23, 262, 8),
(24, 374, 4),
(25, 281, 5),
(26, 316, 0),
(27, 384, 3),
(28, 492, 1),
(29, 378, 4),
(30, 394, 4),
(31, 434, 3),
(32, 324, 6),
(33, 491, 7),
(34, 339, 8),
(35, 398, 9),
(36, 344, 9),
(37, 358, 0),
(38, 334, 4),
(39, 426, 8),
(40, 375, 8),
(41, 411, 7),
(42, 441, 8),
(43, 459, 1),
(44, 443, 8),
(45, 282, 9),
(46, 320, 3),
(47, 298, 6),
(48, 308, 1),
(49, 271, 1),
(50, 441, 0),
(51, 263, 0),
(52, 357, 2),
(53, 459, 9),
(54, 455, 8),
(55, 383, 1),
(56, 323, 9),
(57, 326, 7),
(58, 308, 0),
(59, 434, 0),
(60, 284, 9),
(61, 496, 9),
(62, 465, 9),
(63, 447, 5),
(64, 304, 7),
(65, 309, 3),
(66, 367, 5),
(67, 462, 4),
(68, 479, 4),
(69, 420, 5),
(70, 492, 1),
(71, 292, 3),
(72, 337, 1),
(73, 252, 5),
(74, 311, 2),
(75, 320, 9),
(76, 323, 9),
(77, 288, 2),
(78, 283, 9),
(79, 346, 0),
(80, 383, 0),
(81, 407, 7);

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
(0, 'test', 'test@hotmail.com', 'testpass', 'user', 'calle 105 #45-22'),
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
