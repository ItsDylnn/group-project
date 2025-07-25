import React from "react"
import { Link } from "react-router-dom"
import DarkModeToggle from "./DarkModeToggle"
<Link to="/login">Login</Link>


const Navbar = ({ darkMode, setDarkMode }) => {
  return (
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
  )
}

export default Navbar