// middleware/isAdmin.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(403).json({ message: "Accès refusé" });
    }

    const decodedToken = jwt.verify(token, "your_jwt_secret");
    const user = await User.findById(decodedToken.userId);

    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Accès refusé" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Erreur d'authentification" });
  }
};

module.exports = isAdmin;
