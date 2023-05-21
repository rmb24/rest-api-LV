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

import { PORT } from "../config";

app.get("/", (req, res) => {
  res.send("Hello world");
});
// Routes
app.use("/api", router);

// Not found
app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});
// Start server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
