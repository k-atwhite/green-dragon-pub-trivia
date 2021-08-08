import React from "react";
import "./Card.css";

const Card = ({ name }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
