const express = require("express");
const User = require("../models/User");
const { verifyJWT } = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const router = express.Router();

// Récupérer tous les utilisateurs
router.get("/users", verifyJWT, isAdmin, async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: err.message });
  }
});

// Mettre à jour un utilisateur
router.put("/users/:id", verifyJWT, isAdmin, async (req, res) => {
  const userId = req.params.id;
  const { username, email, role } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { username, email, role },
      { new: true, runValidators: true }
    );
    res.status(200).json({ message: "User updated successfully", user });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error updating user", error: err.message });
  }
});

// Supprimer un utilisateur
router.delete("/users/:id", verifyJWT, isAdmin, async (req, res) => {
  const userId = req.params.id;

  try {
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting user", error: err.message });
  }
});

router.get("/check", verifyJWT, isAdmin, (req, res) => {
  res.status(200).json({ message: "Admin verified" });
});

module.exports = router;
