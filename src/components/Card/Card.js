import React from "react";
import "./Card.css";

const Card = ({ dialog, key }) => {
  return (
    <div className="quote-card" key={key}>
      <h2>{dialog}</h2>
    </div>
  );
};

export default Card;
