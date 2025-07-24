import React, { useState, useEffect } from "react"
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
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <RoutesComponent />
    </div>
  )
}

export default App
