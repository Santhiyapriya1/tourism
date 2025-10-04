import { NavLink } from "react-router-dom";
import "./Sample.css";

export default function Sample() {
  return (
    <nav className="menu">
      <NavLink to="/" className="nav" activeclassname="active">HOME</NavLink>
      <NavLink to="/about" className="nav" activeclassname="active">ABOUT US</NavLink>
      <NavLink to="/destination" className="nav" activeclassname="active">DESTINATION</NavLink>
      <NavLink to="/contact" className="nav" activeclassname="active">CONTACT</NavLink>
    </nav>
  );
}
