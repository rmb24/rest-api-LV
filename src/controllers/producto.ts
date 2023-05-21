import { Request, Response } from "express";
import { pool } from "../../db";

export const productos = async (_: Request, res: Response) => {
  const result = await pool.query("SELECT * FROM TProducto ORDER BY codigo");
  res.json(result[0]);
};

export const producto = async (req: Request, res: Response) => {
  try {
    const { codigo } = req.params;
    const result = await pool.query(
      "SELECT * FROM TProducto WHERE codigo = ?",
      [codigo]
    );
    res.send(result[0]);
  } catch (error) {
    console.log(error);
  }
};

// Crear producto Codigo, Nombre, Precio
export const crearProducto = async (req: Request, res: Response) => {
  try {
    const producto = {
      codigo: req.body.codigo,
      nombre: req.body.nombre,
      precio: req.body.precio,
    };
    console.log(producto);
    await pool.query(
      "INSERT INTO TProducto (codigo, nombre, precio) VALUES (?, ?, ?)",
      [producto.codigo, producto.nombre, producto.precio]
    );
    res.json({
      message: "Producto creado",
    });
  } catch (error) {
    console.log(error);
  }
};

export const actualizarProducto = async (req: Request, res: Response) => {
  const producto = {
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    precio: req.body.precio,
  };
  const { codigo } = req.params;
  // actualizar solo nombre y precio
  await pool.query(
    "UPDATE TProducto SET nombre = ?, precio = ? WHERE codigo = ?",
    [producto.nombre, producto.precio, codigo]
  );

  res.json({ message: "Producto actualizado" });
};

export const eliminarProducto = async (req: Request, res: Response) => {
  try {
    const { codigo } = req.params;
    await pool.query("DELETE FROM TProducto WHERE codigo = ?", [codigo]);
    res.json({
      message: "Producto eliminado",
    });
  } catch (error) {
    console.log(error);
  }
};
