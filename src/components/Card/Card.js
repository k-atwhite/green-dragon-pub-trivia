import React from "react";
import "./Card.css";

const Card = ({ name }) => {
  return (
    <div className="quote-card">
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
