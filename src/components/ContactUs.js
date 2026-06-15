import React from 'react';
import './ContactUs.css'; // Import the CSS file for styling

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          Have any questions or need more information? Feel free to reach out to us. We are here to help!
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5"></textarea>
          </div>
          <button type="submit" className="button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
