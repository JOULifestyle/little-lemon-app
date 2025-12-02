import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/Logo.svg" alt="Little Lemon" />
          </Link>
        </div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
          <li><Link to="/booking-table" onClick={() => setMenuOpen(false)}>Reservations</Link></li>
          <li><Link to="/order" onClick={() => setMenuOpen(false)}>Order Online</Link></li>
          <li>
            {isLoggedIn ? (
              <button className="auth-btn" onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
