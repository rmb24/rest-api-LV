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

import * as ENV from "../config";

// Routes
app.use("/api", router);

// Start server

app.listen(ENV.PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
});
