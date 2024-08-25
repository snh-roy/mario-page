import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="menu-button" onClick={toggleMenu}>
        <span>&#9776;</span>
      </div>
      <ul className={`header-nav ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/home">01 : Home</Link></li>
        <li><Link to="/resume">02 : Resume</Link></li>
        <li><Link to="/blog">03 : Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
