import React from "react";
import { Navigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

// ProtectedRoute component to guard routes
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useLogin();

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, allow access to the route
  return children;
};

export default ProtectedRoute;
