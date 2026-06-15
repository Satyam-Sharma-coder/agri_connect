import React from 'react';
import './HeroSection.css'; // Import the CSS file for styling

function HeroSection() {
  return (
    <div className="hero-section">
      <img src="images/farmers.jpeg" alt="Hero Image" className="hero-image" /> {/* Add the hero image */}
      <h1>Welcome to AgriCycle Connect</h1>
      <p>Transforming Farm Waste into Sustainable Solutions</p>
      <div className="cta-buttons">
        <a href="#join-farmer" className="button">Join as a Farmer</a>
        <a href="#join-company" className="button">Join as a Company</a>
      </div>
    </div>
  );
}

export default HeroSection;
