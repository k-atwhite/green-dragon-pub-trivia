import React from "react";
import "./Card.css";

const Card = ({ name, validateAnswer }) => {
  return (
    <button
      className="card"
      id={name}
      onClick={(event) => validateAnswer(event.target.id)}
    >
      {name}
    </button>
  );
};

export default Card;
