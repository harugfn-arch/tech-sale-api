const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

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
  res.json(user);
});

// POST thêm user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);
  res.json(newUser);
});

// PUT sửa user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (user) {
    user.name = req.body.name;
  }

  res.json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);

  res.json({ message: "User deleted" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
