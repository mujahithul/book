import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import CarDetails from "./components/CarDetails";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import "./App.css";  

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from localStorage
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true"); // Store login status
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Router>
      {/* Background changes based on login status */}
      <div className={isLoggedIn ? "logged-in-bg" : "login-bg"}>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={handleLogout} />
        <Routes>
          {!isLoggedIn ? (
            <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
          ) : (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/book" element={<BookingPage />} />
              <Route path="/car/:id" element={<CarDetails />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
