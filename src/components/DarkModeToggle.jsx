import React, { useEffect, useState } from "react"
import "./DarkModeToggle.css" 

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    document.body.className = darkMode ? "dark" : ""
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode((prev) => !prev)}
        />
        <span className="slider round">
          <span className="icon">{darkMode ? "🌙" : "☀️"}</span>
        </span>
      </label>
    </div>
  )
}
