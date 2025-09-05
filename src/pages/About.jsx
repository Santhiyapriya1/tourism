import React from 'react'
import './About.css';
const About = () => {
  return (
 <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to <b>MyWebsite</b>, your trusted travel partner. 
        We specialize in creating unforgettable travel experiences 
        tailored to your needs.
      </p>

      <div className="about-features">
        <div className="feature-card">
          <h3>🌍 Wide Range of Destinations</h3>
          <p>From beaches to mountains, explore every corner of the world with us.</p>
        </div>
        <div className="feature-card">
          <h3>💰 Best Price Guarantee</h3>
          <p>We provide affordable packages without compromising quality.</p>
        </div>
        <div className="feature-card">
          <h3>🤝 24/7 Support</h3>
          <p>Our team is always available to assist you during your journey.</p>
        </div>
      </div>
    </div>
  );
}
  

export default About