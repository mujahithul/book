import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css"; // Import CSS

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Car Booking</h1>
      <h2>Available Cars</h2>
      <ul className="car-list">
        <li>
          <Link to="/car/1" className="car-link">EECO</Link> {/* Styled Link */}
        </li>
        <li>
          <Link to="/car/2" className="car-link">SWIFT</Link> {/* Styled Link */}
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
