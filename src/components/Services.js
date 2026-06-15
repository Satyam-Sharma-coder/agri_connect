import React from 'react';
import './Services.css'; // Import the CSS file for styling

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <p>
        AgriCycle Connect offers a variety of services to facilitate the exchange of farm waste materials between farmers and companies. Our platform is designed to support sustainable practices and create value for all stakeholders.
      </p>
      <p className="highlight">Key Services:</p>
      <ul>
        <li>Seamless registration process for farmers and companies.</li>
        <li>Easy listing and management of available farm waste materials.</li>
        <li>Direct market access to a wide range of buyers and suppliers.</li>
        <li>Collaboration opportunities for sustainable projects.</li>
        <li>Support and guidance for achieving sustainability goals.</li>
      </ul>
      <a href="#learn-more" className="button">Learn More</a>
      <a href="#get-started" className="button">Get Started</a>
    </section>
  );
};

export default Services;
