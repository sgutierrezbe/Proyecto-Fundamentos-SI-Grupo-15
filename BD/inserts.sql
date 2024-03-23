show databases;
use si_ecommerce;
show tables;

show columns from usuario;
insert into usuario (idusuario,nombre,correo,password,rol) values
(1,"admin","admin@gmail.com","admin123","admin"),
(2,"user","user@gmail.com","user123", "user");
select * from usuario;

show columns from producto;
insert into producto (idproducto,precio,stock) values
(1,"399","2"),
(2,"439","0");
select * from producto;

show columns from gpu;
insert into gpu (modelo,marca,fabricante,vram,velocidad,raytracing,PRODUCTO_idproducto) values
("GeForce RTX 3060", "NVIDIA", "NVIDIA", "8 GB GDDR6", "2352", "Sí",2),
("Radeon RX 6600 XT", "AMD", "AMD", "12 GB GDDR6", "1325", "Sí",1);
select * from gpu;

