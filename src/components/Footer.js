import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#services">Services</a>
        <a href="#farmers">Farmers</a>
        <a href="#companies">Companies</a>
        <a href="#contact">Contact Us</a>
        <a href="#login">Login/Register</a>
      </div>
      <div className="footer-contact">
        <p>Email: info@agricycleconnect.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div className="footer-legal">
        <a href="#privacy-policy">Privacy Policy</a>
        <a href="#terms-of-service">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
