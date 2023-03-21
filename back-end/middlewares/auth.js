const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "Accès refusé" });
  }

  try {
    const decodedToken = jwt.verify(token, "your_jwt_secret");
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Erreur d'authentification" });
  }
};

module.exports = { verifyJWT };
