import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
