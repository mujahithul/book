// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Car Booking</h1>
      <h2>Available Cars</h2>
      <ul>
        <li>
          <Link to="/car/1">EECO</Link> {/* Link to car details with ID 1 */}
        </li>
        <li>
          <Link to="/car/2">SWIFT</Link> {/* Link to car details with ID 2 */}
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
