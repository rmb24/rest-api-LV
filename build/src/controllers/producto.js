"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarProducto = exports.actualizarProducto = exports.crearProducto = exports.producto = exports.productos = void 0;
const db_1 = require("../../db");
const productos = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.pool.query("SELECT * FROM TProducto");
        res.send(result[0]);
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "Error al obtener productos",
        });
    }
});
exports.productos = productos;
const producto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    try {
        const result = yield db_1.pool.query("SELECT * FROM TProducto WHERE codigo = ?", [codigo]);
        res.send(result[0]);
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "Error al obtener producto",
        });
    }
});
exports.producto = producto;
// Crear producto Codigo, Nombre, Precio
const crearProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const producto = {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        precio: req.body.precio,
    };
    try {
        console.log(producto);
        yield db_1.pool.query("INSERT INTO TProducto (codigo, nombre, precio) VALUES (?, ?, ?)", [producto.codigo, producto.nombre, producto.precio]);
        res.json({
            message: "Producto creado",
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "Error al crear producto",
        });
    }
});
exports.crearProducto = crearProducto;
const actualizarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    try {
        const producto = {
            codigo: req.body.codigo,
            nombre: req.body.nombre,
            precio: req.body.precio,
        };
        // actualizar solo nombre y precio
        yield db_1.pool.query("UPDATE TProducto SET nombre = ?, precio = ? WHERE codigo = ?", [producto.nombre, producto.precio, codigo]);
        res.json({ message: "Producto actualizado" });
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "Error al actualizar producto",
        });
    }
});
exports.actualizarProducto = actualizarProducto;
const eliminarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    try {
        yield db_1.pool.query("DELETE FROM TProducto WHERE codigo = ?", [codigo]);
        res.json({
            message: "Producto eliminado",
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "Error al eliminar producto",
        });
    }
});
exports.eliminarProducto = eliminarProducto;
