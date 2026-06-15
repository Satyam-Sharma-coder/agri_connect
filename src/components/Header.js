import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logof.webp" alt="AgriCycle Connect Logo" /> {/* Add the logo image */}
        <span>AgriCycle Connect</span>
      </div>
      <nav>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About Us</NavLink>
        <NavLink to="/how-it-works" activeClassName="active">How It Works</NavLink>
        <NavLink to="/services" activeClassName="active">Services</NavLink>
        <NavLink to="/farmers" activeClassName="active">Farmers</NavLink>
        <NavLink to="/companies" activeClassName="active">Companies</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
        <NavLink to="/login" activeClassName="active">Login/Register</NavLink>
      </nav>
    </header>
  );
}

export default Header;
