import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLoginLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">JobVibe</div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href=".home">Home</a></li> 
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#jobs">Jobs</a></li>
        <li><a href="#signup">Sign Up</a></li>
        
        <li>
          <button className="login-btn" onClick={onLoginLogout}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span>&#9776;</span>
      </div>
    </nav>
  );
};

export default Navbar;
