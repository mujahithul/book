import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import CarDetails from './components/CarDetails';  // Import CarDetails
import Navbar from './components/Navbar';
// src/App.jsx
import './App.css';  // Importing the CSS file
// src/index.jsx
import './index.css'; // Global styles


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} />  {/* Use element prop with JSX */}
        <Route path="/book" element={<BookingPage />} />
        <Route path="/car/:id" element={<CarDetails />} />  {/* Dynamic route for car details */}
      </Routes>
    </Router>
  );
};

export default App;
