import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import {
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_PORT,
} from "../config";

app.get("/", (req, res) => {
  res.send("Development by @rmb24 with ❤️");
});
// Routes
app.use("/api", router);

// Not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "Not found",
  });
});
// Start server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Database: ${DB_HOST}:${DB_PORT}/${DB_DATABASE}`);
});
