import React from "react";
import "./Card.css";

const Card = ({ dialog }) => {
  return (
    <div className="quote-card">
      <h2>{dialog}</h2>
    </div>
  );
};

export default Card;
