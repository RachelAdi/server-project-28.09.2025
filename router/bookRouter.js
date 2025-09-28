const express = require("express");
const router = express.Router();
let items = [
  { id: 1, title: "Book One", author: "Alice" },
  { id: 2, title: "Book Two", author: "Bob" },
  { id: 3, title: "Book Three", author: "Carol" },
];
let users = [{ username: "adi", password: "1234" }];

router.get("/items", (req, res) => {
  res.json(items);
});
router.get("/user", (req, res) => {
  res.json(users);
});
module.exports = router;
