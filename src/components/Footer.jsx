import React from 'react'
import './Footer.css'
const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">MyWebsite</div>
        
        <p className="footer-copy">© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
}


  

export default Footer