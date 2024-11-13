import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id='nav'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/sign">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
