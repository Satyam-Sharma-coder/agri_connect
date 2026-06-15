import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import KeyFeatures from './components/KeyFeatures';
import SuccessStories from './components/SuccessStories';
import MarketInsights from './components/MarketInsights';
import VideoSection from './components/VideoSection';
import NewsletterSignup from './components/NewsletterSignup';
import Services from './components/Services'; // Import Services component
import Farmers from './components/Farmers'; // Import Farmers component
import Companies from './components/Companies'; // Import Companies component
import ContactUs from './components/ContactUs'; // 
import FarmerDashboardPage from '/dashboard/FarmerDashboardPage'; // Import Farmer Dashboard Page
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/key-features" element={<KeyFeatures />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/market-insights" element={<MarketInsights />} />
        <Route path="/videos" element={<VideoSection />} />
        <Route path="/newsletter" element={<NewsletterSignup />} />
        <Route path="/services" element={<Services />} /> {/* Add Services route */}
        <Route path="/farmers" element={<Farmers />} /> {/* Add Farmers route */}
        <Route path="/companies" element={<Companies />} /> {/* Add Companies route */}
        <Route path="/contact" element={<ContactUs />} /> {/* Add ContactUs route */}
        <Route path="/farmer-dashboard" element={<FarmerDashboardPage />} /> {/* Add Farmer Dashboard Route */}
        <Route path="*" element={<h1>404: Page not found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
