import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Reach out with any questions or suggestions.</p>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Our Office</h3>
          <p>📍 123 Tourism Street, Chennai, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@tourism.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
