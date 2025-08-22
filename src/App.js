import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';      
import BookingPage from './pages/BookingPage';
import Confirmation from './pages/Confirmation';
import BookingTable from './pages/BookingTable';
import MenuPage from './pages/MenuPage'; 
import OrderOnlinePage from './pages/OrderOnlinePage';
import AboutPage from './pages/About';
import Login from './component/Login';
import React, { useState } from "react";
import Header from './component/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  // hide header only on login page
  const hideHeader = location.pathname === "/login";

  return (
    <>
      {!hideHeader && (
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/booking-table" element={<BookingTable />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderOnlinePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Login Page */}
        <Route 
          path="/login" 
          element={<Login setIsLoggedIn={setIsLoggedIn} />} 
        />
      </Routes>
    </>
  );
}

export default App;
