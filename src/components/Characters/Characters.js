import React from "react";
import Character from "../Character/Character";
import PropTypes from "prop-types";
import "./Characters.css";

const Characters = ({ characters }) => {
  const characterCards = characters.map((character) => {
    return (
      <Character
        key={character._id}
        id={character._id}
        name={character.name}
        race={character.race}
        gender={character.gender}
        realm={character.realm}
        birthday={character.birth}
        wikiUrl={character.wikiUrl}
      ></Character>
    );
  });

  return <div className="characters-container">{characterCards}</div>;
};

export default Characters;

Characters.propTypes = {
  characters: PropTypes.array,
};
