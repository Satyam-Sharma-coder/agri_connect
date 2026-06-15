import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to AgriCycle Connect</h1>
      <p>Transforming Farm Waste into Sustainable Solutions</p>
      <div className="cta-buttons">
        <a href="#join-farmer" className="button">Join as a Farmer</a>
        <a href="#join-company" className="button">Join as a Company</a>
      </div>
    </div>
  );
};

export default Home;

