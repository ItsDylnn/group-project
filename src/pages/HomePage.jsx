import React, { useEffect, useState } from "react"

const HomePage = () => {
  const [cars, setCars] = useState([])
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [pricePerDay, setPricePerDay] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (loggedIn) {
      fetch("/api/cars")
        .then((res) => res.json())
        .then((data) => setCars(data))
        .catch((err) => console.error("Error:", err))
    }
  }, [loggedIn])

  const addCar = () => {
    fetch("/api/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, brand, pricePerDay }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCars((prev) => [...prev, ...(Array.isArray(data) ? data : [data])])
        setName("")
        setBrand("")
        setPricePerDay("")
      })
      .catch((err) => console.error("Error adding car:", err))
  }

  const handleLogin = () => {
    setLoggedIn(true)
  }

  return (
    <div>
      {!loggedIn ? (
        <div className="login-box">
          <h2>Login</h2>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div className="car-section">
          <h1>Car Catalog</h1>
          <ul>
            {cars.map((car, index) => (
              <li key={index}>
                {car.model || car.name || "Unknown"} -{" "}
                {car.make || car.brand || "Unknown"} - $
                {car.pricePerDay || "?"}/day
              </li>
            ))}
          </ul>

          <h2>Add a New Car</h2>
          <input
            placeholder="Model"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Brand (Make)"
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
      )}
    </div>
  )
}

export default HomePage