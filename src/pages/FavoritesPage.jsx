import React from "react"

const favorites = [
  { id: 1, name: "Tesla", image: "" },
  { id: 2, name: "BMW", image: "" },
]

export default function FavoritesPage() {
  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="car-grid">
        {favorites.map(car => (
          <div className="car-card" key={car.id}>
            <img src={car.image} alt={car.name} />
            <p>{car.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}