import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";  // ✅ Add this import at the top of Navbar.js


const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    // Clear login status and update localStorage
    localStorage.removeItem('isLoggedIn'); // Remove login status from localStorage
    setIsLoggedIn(false); // Update state to reflect the user is logged out
  };

  return (
    <nav>
      <ul>
        {/* Show Home and Book a Car links only if the user is logged in */}
        {isLoggedIn ? (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/book">Book a Car</Link></li>
            {/* Show Log Out button if the user is logged in */}
            <li><button onClick={handleLogout}>Log Out</button></li>
          </>
        ) : (
          // If not logged in, do not show the login link
          null
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
