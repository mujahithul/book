// src/components/CarDetails.js (temporary testing code)
import React from 'react';

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
    <div>
      <h2>{car.name}</h2>
      <p>Price: ${car.price}</p>
      <p>Description: {car.description}</p>
    </div>
  );
};

// Directly render the component with an id (test it)
export default () => <CarDetails id={1} />;
