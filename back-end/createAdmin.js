const mongoose = require("mongoose");
const User = require("./models/User");
const connectDB = require("./database");

connectDB();

const adminEmail = "orojackmel@yahoo.fr"; // Remplacez par votre adresse e-mail
const adminPassword = "celia1401"; // Remplacez par un mot de passe sécurisé
const adminUsername = "celia1401"; // Remplacez par un nom d'utilisateur souhaité

async function createAdmin() {
  try {
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log("L'administrateur existe déjà.");
      process.exit();
    }

    const admin = new User({
      email: adminEmail,
      password: adminPassword,
      username: adminUsername,
      role: "admin",
    });

    await admin.save();
    console.log("Administrateur créé avec succès.");
    process.exit();
  } catch (error) {
    console.error("Erreur lors de la création de l'administrateur :", error);
    process.exit();
  }
}

createAdmin();
