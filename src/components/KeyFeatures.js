import React from 'react';
import './KeyFeatures.css';

const KeyFeatures = () => {
  return (
    <section id="key-features">
      <div className="container">
        <h2>Key Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Seamless Registration</h3>
            <p>Easy and quick sign-up process for both farmers and companies.</p>
          </div>
          <div className="feature-item">
            <h3>Market Access</h3>
            <p>Direct access to a wide range of farm waste materials.</p>
          </div>
          <div className="feature-item">
            <h3>Sustainable Solutions</h3>
            <p>Promoting eco-friendly and sustainable practices in agriculture and industry.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
