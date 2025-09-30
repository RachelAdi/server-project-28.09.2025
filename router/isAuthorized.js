const { isTokenActive } = require("../services/tokens");

function isAuthorized(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json("Unauthorized - Missing token");
  }
  if (!req.headers.authorization.startsWith("Bearer ")) {
    return res.status(401).json("Unauthorized - Invalid format");
  }

  const token = req.headers.authorization.split(" ")[1];

  if (token && isTokenActive(token)) {
    console.log("Authorized via middleware");
    next();
  } else {
    res.status(401).json("Unauthorized - Invalid token");
  }
}

module.exports = { isAuthorized };
