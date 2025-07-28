import React from 'react';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
          <img src="/Logo.svg" alt="Little Lemon" />
          </a>
        </div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
  <li><a href="/" onClick={handleLinkClick}>Home</a></li>
  <li><a href="#" onClick={handleLinkClick}>About</a></li>
  <li><a href="#" onClick={handleLinkClick}>Menu</a></li>
  <li><a href="/booking-table" onClick={handleLinkClick}>Reservations</a></li>
  <li><a href="#order" onClick={handleLinkClick}>Order Online</a></li>
  <li><a href="#login" onClick={handleLinkClick}>Login</a></li>
</ul>

      </nav>
    </header>
  );
}

export default Header;
