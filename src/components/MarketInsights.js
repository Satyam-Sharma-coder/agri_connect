import React from 'react';
import './MarketInsights.css';

const MarketInsights = () => {
  return (
    <section id="market-insights">
      <div className="container">
        <h2>Market Insights</h2>
        <div className="statistics">
          <h3>Impact Stats</h3>
          <ul>
            <li>Amount of farm waste converted: <strong>10,000 tons</strong></li>
            <li>Environmental benefits: <strong>Reduced CO2 emissions by 15%</strong></li>
            <li>Economic impact: <strong>Increased farmer income by 20%</strong></li>
          </ul>
        </div>
        <div className="environmental-impact">
          <h3>Environmental Impact</h3>
          <p>Using farm waste reduces carbon footprints and contributes to a circular economy by recycling resources.</p>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
