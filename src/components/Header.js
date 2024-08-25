import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
function Header() {
  return (
    <nav class="navbar  navbar-fixed-top navbar-inverse">
      <ul className="header-nav">
        <li><Link to="/home">01 : Home</Link></li>
        <li><Link to="/resume">02 : Resume</Link></li>
        <li><Link to="/blog">03 : Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
