import React from 'react';
import './Farmers.css'; // Import the CSS file for styling

const Farmers = () => {
  return (
    <section className="farmers">
      <h2>For Farmers</h2>
      <p>
        AgriCycle Connect empowers farmers to turn their farm waste into a source of income by connecting them with companies seeking sustainable resources. By listing available waste materials on our platform, farmers can find buyers easily and contribute to a more sustainable future.
      </p>
      <p className="highlight">Benefits for Farmers:</p>
      <ul>
        <li>Generate additional income from farm waste.</li>
        <li>Easy-to-use platform for listing available materials.</li>
        <li>Direct connection with companies looking for sustainable resources.</li>
        <li>Contribute to reducing environmental impact through recycling.</li>
      </ul>
      <a href="#learn-more" className="button">Learn More</a>
      <a href="#join-farmer" className="button">Join as a Farmer</a>
    </section>
  );
};

export default Farmers;
