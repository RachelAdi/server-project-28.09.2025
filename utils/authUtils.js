const jwt = require("jsonwebtoken");

const SECRET_KEY = "mysecret123"; 

function generateToken(username) {
  return jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };
