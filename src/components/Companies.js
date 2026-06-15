import React from 'react';
import './Companies.css'; // Import the CSS file for styling

const Companies = () => {
  return (
    <section className="companies">
      <h2>For Companies</h2>
      <p>
        AgriCycle Connect enables companies to source farm waste materials directly from farmers to support their sustainability goals. Our platform provides an efficient and transparent way for companies to access a wide range of farm waste resources.
      </p>
      <p className="highlight">Benefits for Companies:</p>
      <ul>
        <li>Access to diverse farm waste materials.</li>
        <li>Easy procurement process with direct farmer connections.</li>
        <li>Support sustainable practices and reduce environmental impact.</li>
        <li>Collaborate with farmers for long-term supply agreements.</li>
      </ul>
      <a href="#learn-more" className="button">Learn More</a>
      <a href="#join-company" className="button">Join as a Company</a>
    </section>
  );
};

export default Companies;
