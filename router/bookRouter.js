const express = require("express");
const router = express.Router();
const { generateToken } = require("../utils/authUtils");

let items = [
  { id: 1, title: "Book One", author: "Alice" },
  { id: 2, title: "Book Two", author: "Bob" },
  { id: 3, title: "Book Three", author: "Carol" },
];
let users = [{ username: "adi", password: "1234" }];
let activeTokens = []; 

router.get("/items", (req, res) => {
  res.json(items);
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(username);
  activeTokens.push(token);

  res.json({ token });
});


module.exports = router;
