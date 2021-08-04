import React from "react";
import "./Card.css";

const Card = ({ name, race, wikiUrl, gender, realm, birthday, key }) => {
  return (
    <div className="character-card" key={key}>
      <h3>{name}</h3>
      <p>{race}</p>
      <p>{wikiUrl}</p>
      <p>{gender}</p>
      <p>{realm}</p>
      <p>{birthday}</p>
    </div>
  );
};

export default Card;
