import React from 'react'
import "./Sample.css"
import { Link } from 'react-router-dom';
import bg from '../images/bg.jpeg';
const Sample = () => {
  return (
   
    <div className="menu">
       
      
  <Link to="/">HOME</Link>
  <Link to="/about">ABOUT US</Link>
  <Link to="/destination">DESTINATION</Link>
  <Link to="/contact">CONTACT</Link>
</div>

  );
}

export default Sample