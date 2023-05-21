import { Router } from "express";
import * as productos from "../controllers/producto";

const router = Router();

router.get("/productos", productos.productos);
router.get("/productos/:codigo", productos.producto);
router.post("/productos", productos.crearProducto);
router.put("/productos/:codigo", productos.actualizarProducto);
router.delete("/productos/:codigo", productos.eliminarProducto);

export default router;
