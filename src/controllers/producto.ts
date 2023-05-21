import { Request, Response } from "express";
import { pool } from "../../db";

export const productos = async (_: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM TProducto");
    res.send(result[0]);
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error al obtener productos",
    });
  }
};

export const producto = async (req: Request, res: Response) => {
  const { codigo } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM TProducto WHERE codigo = ?",
      [codigo]
    );
    res.send(result[0]);
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error al obtener producto",
    });
  }
};

// Crear producto Codigo, Nombre, Precio
export const crearProducto = async (req: Request, res: Response) => {
  const producto = {
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    precio: req.body.precio,
  };
  try {
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
    res.json({
      message: "Error al crear producto",
    });
  }
};

export const actualizarProducto = async (req: Request, res: Response) => {
  const { codigo } = req.params;
  try {
    const producto = {
      codigo: req.body.codigo,
      nombre: req.body.nombre,
      precio: req.body.precio,
    };
    // actualizar solo nombre y precio
    await pool.query(
      "UPDATE TProducto SET nombre = ?, precio = ? WHERE codigo = ?",
      [producto.nombre, producto.precio, codigo]
    );

    res.json({ message: "Producto actualizado" });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error al actualizar producto",
    });
  }
};

export const eliminarProducto = async (req: Request, res: Response) => {
  const { codigo } = req.params;
  try {
    await pool.query("DELETE FROM TProducto WHERE codigo = ?", [codigo]);
    res.json({
      message: "Producto eliminado",
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error al eliminar producto",
    });
  }
};
