import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import FavoritesPage from "./pages/FavoritesPage"
import DarkModeToggle from "./components/DarkModeToggle"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    document.body.className = darkMode ? "dark" : ""
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : ""}`}>
        <nav className="navbar">
          <div className="navbar-left">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <div className="navbar-right">
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/favorites">Favorites</Link>
          </div>
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
