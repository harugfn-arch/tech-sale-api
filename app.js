const express = require("express");
const cors = require("cors");
const path = require("path");
const https = require("https");
const fs = require("fs");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/categories", require("./routes/category.routes"));
app.use("/api/products", require("./routes/product.routes"));

// SSL config (file bạn đã tạo bằng openssl)
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

// HTTPS server
https.createServer(options, app).listen(3000, () => {
  console.log("Server chạy https://localhost:3000");
});