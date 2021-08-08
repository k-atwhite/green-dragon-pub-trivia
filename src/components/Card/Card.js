import React from "react";
import "./Card.css";

const Card = ({ name, id }) => {
  return (
    <div
      className="card"
      id={id}
      onClick={(event) => console.log(event.target.id)}
    >
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
