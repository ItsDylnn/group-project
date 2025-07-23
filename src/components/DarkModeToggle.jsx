import React, { useEffect, useState } from "react"

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : ""
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode]);

  return (
      <button onClick={() => setDarkMode(prev => !prev)} className="toggle-btn">
        {darkMode ? "☀️Light Mode" : "🌙Dark Mode"}
      </button>
  )
}
