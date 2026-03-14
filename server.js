const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// dữ liệu user
let users = [
  { id: 1, name: "Nguyen Van A" },
  { id: 2, name: "Tran Thi B" },
  { id: 3, name: "Le Van C" }
];

// GET tất cả user
app.get("/users", (req, res) => {
  res.json(users);
});

// GET user theo id
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User không tồn tại" });
  }

  res.json(user);
});

// POST thêm user
app.post("/users", (req, res) => {
  const { name } = req.body;

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);

  res.json(newUser);
});

// PUT sửa user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User không tồn tại" });
  }

  user.name = name;

  res.json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User không tồn tại" });
  }

  users.splice(index, 1);

  res.json({ message: "Xóa user thành công" });
});

app.listen(PORT, () => {
  console.log(`Server chạy tại port ${PORT}`);
});
