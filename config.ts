import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST || "localhost";
export const USER = process.env.USER || "rmb";
export const PASSWORD = process.env.PASSWORD || "rmb24";
export const NAME = process.env.NAME || "BDProductos";
export const PORT_DB = process.env.DB_PORT
  ? parseInt(process.env.DB_PORT)
  : 3306;
