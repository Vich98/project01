import React from 'react';
import { Link } from 'react-router-dom';
import img2 from './images/logo.png';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img  src={img2} alt="University Health Center Logo" />
      </Link>
      <div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
