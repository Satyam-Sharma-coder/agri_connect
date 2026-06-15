import React from 'react';
import './MarketPrices.css'; // Import CSS for the widget

function MarketPrices() {
  return (
    <div className="widget market-prices">
      <h3>Recent Market Prices</h3>
      <ul>
        <li>Paddy Straw: ₹300/ton</li>
        <li>Husks: ₹200/ton</li>
        <li>Manure: ₹150/ton</li>
      </ul>
    </div>
  );
}

export default MarketPrices;
