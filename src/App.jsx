
import React, { use } from 'react'
import { useEffect,useState } from 'react'
import login from './components/login.jsx'
import registar from './components/registar.jsx'

function App() {
  const [cars, setCars] = useState([])
  const [name, setName] = useState("")
  const [brand, setBrand] =useState("")
  const [pricePerDay, setPricePerDay] =useState("")

  //Fetch cars from the backend api
  useEffect(() => {
    fetch("api-ninjas.com/api/cars#cars-endpoint")
    .then(res => setCars(res.json()))
    .catch(err => console.error(err))
  },[]);

  // Add a new car to the backend api
  const addCar = () => {
    fetch("api-ninjas.com/api/cars#cars-endpoint"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        brand,
        pricePerDay
      })
    }
    .then(res => res.json())
    .then(data => {
      setCars([...cars, data]);
      setName("");
      setBrand("");
      setPricePerDay("");
    })
    .catch(err => console.error(err));
  }

  return (
    <div>
      <h1>Car Catalog</h1>
      <ul>
        ((
        ))
      </ul>

      <h2>Add a new car</h2>
      <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder='brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
      <input placeholder='price per day' value={pricePerDay} onChange={(e) => setPricePerDay(e.target.value)} />
      <button onClick={addCar}>Add Car</button>
    </div>
  );

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

export default App;