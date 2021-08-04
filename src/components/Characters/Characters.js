import React from "react";
import Card from "../Card/Card";
import "./Characters.css";

const Characters = ({ characters }) => {
  const characterCards = characters.map((character) => {
    return (
      <Card
        key={character.id}
        name={character.name}
        race={character.race}
        gender={character.gender}
        realm={character.realm}
        birthday={character.birth}
        wikiUrl={character.wikiUrl}
      ></Card>
    );
  });

  return <div className="characters-container">{characterCards}</div>;
};

export default Characters;
