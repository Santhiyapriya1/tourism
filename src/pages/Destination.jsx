import React from "react";
import "./Destination.css";

import Dest from "../constant/Dest";

function Destination() {
  return (
    <div className="destination">
      <div className="destination-grid">
        {Dest.map((place) => (
          <div className="destination-card" key={place.id}>
            <img
              src={place.img}
              alt={place.title}
              className="place-img"
            />
            <h3>{place.title}</h3>
            <p>{place.Description}</p>
            <button>add to visit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;