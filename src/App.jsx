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
    fetch("http://localhost:5000/cars") // The url of the backend api
    .then(res => setCars(res.json()))
    .catch(err => console.error(err))
  },[]);

  // Add a new car to the backend api
  const addCar = () => {
    fetch("http://localhost:5000/cars"),{ // The url of the backend api
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
}

export default App;