// components/Navbar.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import "./Navbar.css";

const Navbar = ({ user }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const loggedIn = await isLoggedIn();
      setIsAuthenticated(loggedIn);
    };
    checkAuthentication();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <nav className="custom-navbar">
      <div className="container-Navbar">
        <Link to="/" className="custom-navbar-brand">
          Home
        </Link>
        <ul className="custom-navbar-links">
          {isAuthenticated ? (
            <>
              <li>
                <div className="custom-nav-link">{user && user.email}</div>
              </li>
              <li>
                <button onClick={handleLogout} className="login-btn">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="custom-nav-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="custom-nav-link register-btn">
                  Register
                </Link>
              </li>
            </>
          )}
          <li>
            <Link to="/contact" className="custom-nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
