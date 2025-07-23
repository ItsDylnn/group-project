import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import FavoritesPage from "./pages/FavoritesPage"
import DarkModeToggle from "./components/DarkModeToggle"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/favorites">Favorites</Link>
          <DarkModeToggle />
        </nav>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
