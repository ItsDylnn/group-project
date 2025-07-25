function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <h3 className="car-name">{car.name}</h3>
      <p className="car-brand">{car.brand} - {car.year}</p>
      <p className="car-price">${car.pricePerDay}/day</p>
      <a href={`/cars/${car.id}`} className="view-details">View Details</a>
    </div>
  );
}

export default CarCard;
