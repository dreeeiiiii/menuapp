// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("token"); // Check if logged in
  const userRole = localStorage.getItem("category"); // 'customer' or 'business'

  if (!token) {
    // Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    // Logged in but unauthorized → redirect to Unauthorized page
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />; // Authorized → render child route
};

export default ProtectedRoute;
