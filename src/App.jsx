import React, { useState, useEffect } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import Navbar from "./components/Navbar"
import RoutesComponent from "./components/RoutesComponent"
import "./App.css"
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)
  const [cars, setCars] = useState([])
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [pricePerDay, setPricePerDay] = useState("")
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    document.body.className = darkMode ? "dark" : ""
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

 useEffect(() => {
  fetch("http://localhost:5000/api/cars")
    .then((res) => res.json())
    .then((data) => {
      console.log(data) 
      setCars(data)     
    })
    .catch((err) => console.error("Error:", err))
}, [])


  const addCar = () => {
    fetch("https://api-ninjas.com/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, brand, pricePerDay }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCars((prevCars) => [...prevCars, data])
        setName("")
        setBrand("")
        setPricePerDay("")
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <RoutesComponent />

      <div className="car-section">
        <h1>Car Catalog</h1>
        <ul>
          {cars.map((car, index) => (
            <li key={index}>
              {car.name} - {car.brand} - ${car.pricePerDay}/day
            </li>
          ))}
        </ul>

        <h2>Add a New Car</h2>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          placeholder="Price per day"
          value={pricePerDay}
          onChange={(e) => setPricePerDay(e.target.value)}
        />
        <button onClick={addCar}>Add Car</button>
      </div>
    </div>
  )
}

export default App
