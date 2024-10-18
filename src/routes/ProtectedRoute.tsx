import React from "react";
import { Navigate } from "react-router-dom";

// Mock authentication function (replace this with actual auth logic)
const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("authToken"); // Example using localStorage
};

// ProtectedRoute component to guard routes
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  if (!isAuthenticated()) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, allow access to the route
  return children;
};

export default ProtectedRoute;
