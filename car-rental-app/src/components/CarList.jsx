import { useEffect, useState } from "react"
import CarCard from "./CarCard"

function CarList() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
  }, [])

  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  )
}

export default CarList;
