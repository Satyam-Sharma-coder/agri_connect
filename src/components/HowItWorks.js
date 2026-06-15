import React from 'react';
import './HowItWorks.css'; // Import the CSS file for styling

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="process">
          <h3>For Farmers:</h3>
          <ul>
            <li>Register on the platform.</li>
            <li>List available waste materials.</li>
            <li>Connect with interested buyers.</li>
          </ul>
          <h3>For Companies:</h3>
          <ul>
            <li>Browse available farm waste materials.</li>
            <li>Select and purchase required materials.</li>
            <li>Collaborate with farmers for ongoing supply.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
