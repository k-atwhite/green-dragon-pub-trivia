import React from "react";
import Card from "./Card";
import "./Characters.css";

const Characters = ({ characters }) => {
  const characterCards = characters.map((character) => {
    return (
      <Card
        name={character.name}
        race={character.race}
        gender={character.gender}
        realm={character.realm}
        birthday={character.birth}
        wikiUrl={character.wikiUrl}
        key={character.id}
      ></Card>
    );
  });

  return <div className="characters-container">{characterCards}</div>;
};

export default Characters;
