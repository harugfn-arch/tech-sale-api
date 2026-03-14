const express = require("express");

const app = express();
const port = 3000;

// route trang chủ
app.get("/", (req, res) => {
  res.send("Backend API is running");
});

// dữ liệu users
const users = [
  { id: 1, name: "Nguyen Van A" },
  { id: 2, name: "Tran Thi B" },
  { id: 3, name: "Le Van C" }
];

// lấy tất cả users
app.get("/users", (req, res) => {
  res.json(users);
});

// lấy user theo id
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User không tồn tại" });
  }

  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
