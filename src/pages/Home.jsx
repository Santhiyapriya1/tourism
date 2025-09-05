import React from "react";
import "./Home.css";
import bgImage from "../images/sb.jpg";

function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="overlay">
        <h1 className="company-name">My Company</h1>
      </div>
    </div>
  );
}

export default Home;
