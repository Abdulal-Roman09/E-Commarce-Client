import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  // Not logged in & not on login/register page → redirect to login
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" replace />;
  }

  // Already logged in & trying to access login/register page
  if (isAuthenticated && location.pathname.includes("/login")) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashbord" replace />;
    } else {
      return <Navigate to="/shop/home" replace />;
    }
  }

  // Normal user trying to access admin routes
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth-page" replace />;
  }

  // Admin trying to access shop
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("/shop/home")
  ) {
    return <Navigate to="/admin/dashbord" replace />;
  }

  // Otherwise render children
  return <>{children}</>;
};

export default CheckAuth;
