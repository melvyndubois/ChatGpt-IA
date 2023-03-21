const jwt = require("jsonwebtoken");

// Générer un token
const token = jwt.sign(
  { userId: "64148f9b2c26b41c573c1658", role: "admin" },
  "your_jwt_secret",
  { expiresIn: "1h" }
);

const decodedToken = jwt.verify(token, "your_jwt_secret");
console.log(decodedToken);
