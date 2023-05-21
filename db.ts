import { createPool } from "mysql2/promise";
import { HOST, USER, PASSWORD, NAME, PORT_DB } from "./config";

export const pool = createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: NAME,
  port: PORT_DB,
});
