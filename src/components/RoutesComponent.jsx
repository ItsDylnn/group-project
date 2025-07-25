// RoutesComponent.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import CarList from "./CarList";
// ... other imports

export default function RoutesComponent({ isLoggedIn, setIsLoggedIn }) {
  return (
    <Routes>
      {/* Default route to login */}
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/register" element={<Register />} />
      {/* Protected routes */}
      {isLoggedIn && (
        <>
          <Route path="/cars" element={<CarList />} />
          {/* other protected pages */}
        </>
      )}
      {/* Redirect if access denied */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  );
}
