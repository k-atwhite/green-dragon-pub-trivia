import React from "react";
import "./Card.css";

const Card = ({ name }) => {
  return (
    <div className="card" onClick={console.log(target.id)}>
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
