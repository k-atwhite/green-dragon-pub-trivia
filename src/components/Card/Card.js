import React from "react";
import "./Card.css";

const Card = ({ name, race, gender, realm, birthday, wikiUrl, id }) => {
  return (
    <div className="character-card" id={id}>
      <h3>{name}</h3>
      <p>{race}</p>
      <p>{gender}</p>
      <p>{realm}</p>
      <p>{birthday}</p>
      <p>{wikiUrl}</p>
    </div>
  );
};

export default Card;
