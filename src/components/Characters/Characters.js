import React from "react";
import Character from "../Character/Character";
import PropTypes from "prop-types";
import "./Characters.css";

const Characters = ({ characters }) => {
  const characterCards = characters.map((character) => {
    if (!characters.length) {
      return <h2 className="error-msg">trouble loading characters...</h2>;
    }

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

  return (
    <div>
      <h2 className="click-here">Click a hero to see all their words</h2>
      <div className="characters-container">
        {characterCards}
      </div>
    </div>

  )
};

export default Characters;

Characters.propTypes = {
  characters: PropTypes.array,
};
