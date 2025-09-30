const express = require("express");
const router = express.Router();
const { generateToken } = require("../utils/authUtils");
const { isAuthorized } = require("./isAuthorized");
const { addToken, removeToken } = require("../services/tokens");

let items = [
  { id: 1, title: "Book One", author: "Alice" },
  { id: 2, title: "Book Two", author: "Bob" },
  { id: 3, title: "Book Three", author: "Carol" },
];
let users = [{ username: "adi", password: "1234" }];
let activeTokens = [];

router.get("/items", isAuthorized, (req, res) => {
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
  addToken(token);

  res.json({ token });
});
router.post("/logout", isAuthorized, (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  removeToken(token);

  res.json({ message: "Logged out successfully" });
});

module.exports = router;
