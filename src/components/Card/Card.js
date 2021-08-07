import React from "react";
import "./Card.css";

const Card = ({ dialog, key, id }) => {
  return (
    <div className="quote-card" key={key}>
      <h2>{dialog}</h2>
      <h3>{id}</h3>
    </div>
  );
};

export default Card;
