import React from 'react';
import "./CarDetails.css";

const CarDetails = ({ id }) => {
  const carData = {
    1: { name: 'EECO', price: 30000, description: 'A reliable car' },
    2: { name: 'SWIFT', price: 28000, description: 'A great choice for city driving' },
  };

  const car = carData[id];

  if (!car) {
    return <div>Car not found!</div>;
  }

  return (
    <div className="car-container">
      <h2>{car.name}</h2>
      <p>Price: ${car.price}</p>
      <p>Description: {car.description}</p>
      <button className="car-button">Book {car.name}</button> {/* Styled Button */}
    </div>
  );
};

// Directly render the component with an id (test it)
export default () => <CarDetails id={1} />;
