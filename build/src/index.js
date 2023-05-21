"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./routes/router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const config_1 = require("../config");
app.get("/", (req, res) => {
    res.send("Development by @rmb24 with ❤️");
});
// Routes
app.use("/api", router_1.default);
// Not found
app.use((req, res, next) => {
    res.status(404).json({
        message: "Not found",
    });
});
// Start server
app.listen(config_1.PORT, () => {
    console.log(`Server running on port ${config_1.PORT}`);
    console.log(`Database: ${config_1.DB_HOST}:${config_1.DB_PORT}/${config_1.DB_DATABASE}`);
});
