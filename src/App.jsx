import React, { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import RoutesComponent from "./components/RoutesComponent"
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
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <RoutesComponent />
      </div>
    </Router>
  )
}

export default App
