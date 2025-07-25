// CarList.jsx
import React, { useState, useEffect } from "react";

function CarList() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await fetch("http://localhost:5000/api/cars");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCars(data);
      } catch (err) {
        console.error("Failed to load cars", err);
        setError("Failed to load cars. Please try again later.");
      }
    }

    fetchCars();
  }, []);

  if (error) return <div className="error">{error}</div>;

  return (
    <section className="car-list">
      <h2>Available Cars</h2>
      {cars.length === 0 ? (
        <p>Loading cars...</p>
      ) : (
        <ul>
          {cars.map((car, idx) => (
            <li key={idx}>
              {car.make} {car.model} – {car.year}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CarList;
