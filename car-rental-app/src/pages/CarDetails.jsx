import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function CarDetails() {
  const { id } = useParams()
  const [car, setCar] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data))
  }, [id])

  if (!car) return <p className="loading">Loading...</p>

  return (
    <div className="car-details">
      <img src={car.image} alt={car.name} className="car-details-image" />
      <h2 className="car-details-name">{car.name}</h2>
      <p className="car-details-info">{car.brand} • {car.year} • {car.type}</p>
      <p className="car-details-price">${car.pricePerDay}/day</p>
      <p className="car-description">{car.description}</p>
    </div>
  )
}

export default CarDetails;
