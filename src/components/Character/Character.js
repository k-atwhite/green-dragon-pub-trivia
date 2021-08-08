import React from "react";
import "./Character.css";

const Character = ({ name, race, gender, realm, birth, wikiUrl }) => {
  return (
    <div className="card" id={name}>
      <p>{name}</p>
      <p>{race}</p>
      <p>{gender}</p>
      <p>{realm}</p>
      <p>{birth}</p>
      <p>{wikiUrl}</p>
    </div>
  );
};

export default Character;
