import React from 'react';
import FarmerHeader from './FarmerHeader';
import FarmerSidebar from './FarmerSidebar';
import WasteUpload from './WasteUpload';
import MarketPrices from './MarketPrices';
import PendingOrders from './PendingOrders';
import RevenueOverview from './RevenueOverview';
import TipsRecommendations from './TipsRecommendations';
import './FarmerDashboard.css'; // Import the CSS for the dashboard

function FarmerDashboard() {
  return (
    <div className="farmer-dashboard">
      <FarmerHeader />
      <div className="dashboard-content">
        <FarmerSidebar />
        <main className="main-content">
          <section className="widgets">
            <WasteUpload />
            <MarketPrices />
            <PendingOrders />
            <RevenueOverview />
          </section>
          <section className="details">
            <TipsRecommendations />
            {/* Add more components like WasteInventory, SalesHistory, etc. here */}
          </section>
        </main>
      </div>
    </div>
  );
}

export default FarmerDashboard;
