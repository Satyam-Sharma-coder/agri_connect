import React from 'react';
import './RevenueOverview.css'; // Import CSS for the widget

function RevenueOverview() {
  return (
    <div className="widget revenue-overview">
      <h3>Revenue Overview</h3>
      <p>Current Month Earnings: ₹15,000</p>
      <p>Year to Date: ₹1,20,000</p>
    </div>
  );
}

export default RevenueOverview;
