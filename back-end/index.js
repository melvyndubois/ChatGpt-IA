const express = require("express");
const cors = require("cors");
const User = require("./models/User");
const adminRoutes = require("./routes/admin");

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = require("./database");
connectDB();

// Utiliser les routes d'authentification

app.post("/api/auth/register", async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "L'utilisateur existe déjà." });
    }

    const newUser = new User({ email, password, username });
    await newUser.save();

    res.status(201).json({ message: "Inscription réussie !" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Erreur lors de l'inscription." });
  }
});

// Les autres routes existantes
// ... (avatars et autres routes)
app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
