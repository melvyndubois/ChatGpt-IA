import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Admin from "./pages/AdminPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/ContactPage";
import { getUserFromLocalStorage } from "./utils/auth";
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(getUserFromLocalStorage());

  useEffect(() => {
    setUser(getUserFromLocalStorage());
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
