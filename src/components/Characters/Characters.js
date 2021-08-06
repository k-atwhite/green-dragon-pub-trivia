import React from "react";
import Card from "../Card/Card";
import "./Characters.css";

const Characters = ({ characters }) => {
  // let randomOptions = [];
  // if (characters.length) {
  //   randomOptions = [
  //     characters[Math.floor(Math.random() * 18)],
  //     characters[Math.floor(Math.random() * 18)],
  //     characters[Math.floor(Math.random() * 18)],
  //   ];
  // }
  // console.log(randomOptions);

  let characterCards = characters.map((character) => {
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
