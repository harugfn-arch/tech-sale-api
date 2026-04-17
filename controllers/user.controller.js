const pool = require("../config/db");

// GET USERS
const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// CREATE USER
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    await pool.query(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, '123')",
      [name, email]
    );

    res.json({ message: "User created" });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getUsers,
  createUser
};