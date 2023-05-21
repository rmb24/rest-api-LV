import { createPool } from "mysql2/promise";

const host = "localhost";
const user = "rmb";
const password = "rmb24";
const name = "BDProductos";
const port = 3306;

export const pool = createPool({
  host,
  user,
  password,
  database: name,
  port,
});
