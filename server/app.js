const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// 托管静态网页
app.use(express.static(path.join(__dirname, "../")));

// 模拟本地api路由，和Vercel保持一致
app.post("/api/create‑order", require("../api/create‑order"));
app.post("/api/notify", require("../api/notify"));
app.get("/api/order‑status", require("../api/order‑status"));

module.exports = app;