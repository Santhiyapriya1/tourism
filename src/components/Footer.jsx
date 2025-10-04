import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/destination">Destinations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="footer-socials">
        <a href="#">FB</a>
        <a href="#">IG</a>
        <a href="#">Twitter</a>
      </div>
    </footer>
  );
}
