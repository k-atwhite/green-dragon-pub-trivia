import React from "react";
import Card from "../Card/Card";
import "./Characters.css";

const Characters = ({ characters }) => {
  const characterNames = characters.map((character) => {
    return character.name;
  });

  // const randomOptions = random.sample(characterNames, 3);
  let character1 =
    characterNames[Math.floor(Math.random() * characterNames.length)];
  let character2 =
    characterNames[Math.floor(Math.random() * characterNames.length)];
  let character3 =
    characterNames[Math.floor(Math.random() * characterNames.length)];

  const randomOptions = [character1, character2, character3];

  const characterCards = randomOptions.map((character) => {
    return (
      <Card
        key={character._id}
        id={character._id}
        name={character.name}
        // race={character.race}
        // gender={character.gender}
        // realm={character.realm}
        // birthday={character.birth}
        // wikiUrl={character.wikiUrl}
      ></Card>
    );
  });

  return <div className="characters-container">{characterCards}</div>;
};

export default Characters;
