import React from "react";
import "./Card.css";

const Card = ({ name, race, gender, realm, birthday }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{race}</p>
      <p>{gender}</p>
      <p>Realm: {realm}</p>
      <p>Birth: {birthday}</p>
    </div>
  );
};

export default Card;
