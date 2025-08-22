import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const category = localStorage.getItem("category");

  if (token && category) {
    if (category === "customer") return <Navigate to="/customer" replace />;
    if (["business-owner", "business_owner", "business owner"].includes(category))
      return <Navigate to="/business" replace />;
  }

  return children;
};

export default PublicRoute;
