import React from 'react';
import './FarmerSidebar.css'; // Import CSS for the sidebar

function FarmerSidebar() {
  return (
    <aside className="farmer-sidebar">
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#inventory">Waste Inventory</a></li>
        <li><a href="#sales-history">Sales History</a></li>
        <li><a href="#market-trends">Market Trends</a></li>
        <li><a href="#education">Educational Content</a></li>
      </ul>
    </aside>
  );
}

export default FarmerSidebar;
