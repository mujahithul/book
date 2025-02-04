// src/components/BookingPage.js
import React, { useState } from 'react';

const BookingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [car, setCar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name} - ${email} to book ${car}`);
  };

  return (
    <div>
      <h2>Book a Car</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Car:
          <select
            value={car}
            onChange={(e) => setCar(e.target.value)}
            required
          >
            <option value="">Select a car</option>
            <option value="Toyota Corolla">EECO</option>
            <option value="Honda Civic">SWIFT</option>
            {/* Add more car options here */}
          </select>
        </label>
        <br />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;
