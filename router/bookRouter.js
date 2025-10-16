const express = require("express");
const router = express.Router();
const { isAuthorized } = require("./isAuthorized");

let items = [
  { id: 1, title: "Book One", author: "Alice" },
  { id: 2, title: "Book Two", author: "Bob" },
  { id: 3, title: "Book Three", author: "Carol" },
];

router.get("/items", isAuthorized, (req, res) => {
  res.json(items);
});

module.exports = router;
