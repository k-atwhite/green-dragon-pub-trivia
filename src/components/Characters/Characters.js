import React from "react";
import Card from "../Card/Card";
import "./Characters.css";

const Characters = ({ characters }) => {
  // let character1 = characters[Math.floor(Math.random() * characters.length)];
  // let character2 = characters[Math.floor(Math.random() * characters.length)];
  // let character3 = characters[Math.floor(Math.random() * characters.length)];

  // let randomOptions = [character1, character2, character3];
  // console.log(randomOptions);

  const characterCards = characters.map((character) => {
    return (
      <Card
        key={character._id}
        id={character._id}
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
