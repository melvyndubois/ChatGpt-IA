import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Erreur lors de l'inscription.");
      }

      alert("Inscription réussie! Vous pouvez maintenant vous connecter.");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="register">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nom d'utilisateur"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmez le mot de passe"
          required
        />
        <button type="submit">S'inscrire</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Register;
