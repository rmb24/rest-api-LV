CREATE DATABASE IF NOT EXISTS `BDProductos` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `BDProductos`;

CREATE TABLE TProducto(
    codigo VARCHAR(10) NOT NULL UNIQUE,
    nombre VARCHAR(20) NOT NULL,
    precio DECIMAL(10,2) NOT NULL
);



INSERT INTO TProducto VALUES('P001','Coca Cola', 18.00),
                            ('P002','Pepsi', 15.00),
                            ('P003','Fanta', 16.00),
                            ('P004','Sprite', 14.00)