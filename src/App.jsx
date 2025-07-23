import React, { use } from 'react'
import { useEffect,useState } from 'react'
import carlist from './components/carlist.jsx'
import registar from './components/registar.jsx'

function App() {
  const [cars, setCars] = useState([])
  const [name, setName] = useState("")
  const [brand, setBrand] =useState("")
  const [pricePerDay, setPricePerDay] =useState("")

  //Fetch cars from the backend api
  useEffect(() => {
    fetch("http://localhost:5000/cars")
    .then(res => setCars(res.json()))
    .catch(err => console.error(err))
  },[]);
}
// Add a new car to the backend api
const addCar = () => {
  fetch("http://localhost:5000/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      brand,
      pricePerDay
    })
  })
  .then(res => res.json())
  .then(data => {
    setCars([...cars, data]);
    setName("");
    setBrand("");
    setPricePerDay("");
  })
  .catch(err => console.error(err));
}
return(
  <div>
    <h1>Car Catalog</h1>
    <ul>
      {cars.map(car=>(
        <li key={car._id}></li>
      ))}
    </ul>

    <h2>Add a new car</h2>
    <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
    <input placeholder='brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
    <input placeholder='price per day' value={pricePerDay} onChange={(e) => setPricePerDay(e.target.value)} />
    <button onClick={addCar}>Add Car</button>
  </div>
)
export default App;