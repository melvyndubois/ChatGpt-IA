// components/PrivateRoute.js
import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import { isLoggedIn } from "../utils/auth";

const PrivateRoute = () => {
  const isAuthenticated = isLoggedIn();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return <Outlet />;
};

export default PrivateRoute;
