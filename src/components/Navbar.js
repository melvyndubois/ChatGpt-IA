import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import "./Navbar.css";

const Navbar = ({ user }) => {
  useEffect(() => {
    const checkAuthentication = async () => {
      const loggedIn = await isLoggedIn();
      if (!loggedIn) {
        localStorage.removeItem("token");
      }
    };
    checkAuthentication();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <nav className="custom-navbar">
      <div className="container-Navbar">
        <Link to="/" className="custom-navbar-brand">
          Home
        </Link>
        <ul className="custom-navbar-links">
          {JSON.stringify(user) !== "{}" && (
            <>
              <li>
                <div className="custom-nav-link user-name">
                  {user && user.username}
                </div>
              </li>
              <li>
                <button onClick={handleLogout} className="login-btn">
                  Logout
                </button>
              </li>
            </>
          )}
          {JSON.stringify(user) === "{}" && (
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
