import React from 'react';
import './PendingOrders.css'; // Import CSS for the widget

function PendingOrders() {
  return (
    <div className="widget pending-orders">
      <h3>Pending Orders</h3>
      <ul>
        <li>Order #1234: 5 tons of Paddy Straw - ₹1500</li>
        <li>Order #1235: 3 tons of Husks - ₹600</li>
      </ul>
    </div>
  );
}

export default PendingOrders;
