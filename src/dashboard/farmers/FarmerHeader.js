import React from 'react';
import './FarmerHeader.css'; // Import CSS for the header

function FarmerHeader() {
  return (
    <header className="farmer-header">
      <div className="welcome-message">
        <h2>Welcome, Ramesh!</h2>
      </div>
      <nav className="dashboard-nav">
        <a href="#profile">Profile</a>
        <a href="#support">Support</a>
        <a href="#notifications">Notifications</a>
      </nav>
    </header>
  );
}

export default FarmerHeader;
