import React from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
  return (
    <section id="success-stories">
      <div className="container">
        <h2>Success Stories</h2>
        <div className="testimonials">
          <div className="testimonial">
            <blockquote>
              "Thanks to AgriCycle Connect, I’ve been able to sell my farm waste and earn extra income!"
            </blockquote>
            <p>- Farmer John</p>
          </div>
          <div className="testimonial">
            <blockquote>
              "Using farm waste materials has significantly reduced our production costs and carbon footprint."
            </blockquote>
            <p>- Green Industries</p>
          </div>
        </div>
        <div className="case-studies">
          <h3>Case Studies</h3>
          <p>Read about successful collaborations between farmers and companies that have benefited both economically and environmentally.</p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;