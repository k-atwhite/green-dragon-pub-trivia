import React from "react";
import Card from "../Card/Card";
import "./Options.css";
import PropTypes from "prop-types";

const Options = ({ data, validateAnswer }) => {
  let cards = data.map((character) => {
    return (
      <Card
        name={character.name}
        key={character._id}
        id={character._id}
        race={character.race}
        gender={character.gender}
        realm={character.realm}
        birthday={character.birth}
        validateAnswer={validateAnswer}
        wikiUrl={character.wikiUrl}
      />
    );
  });

  return <div className="options-container">{cards}</div>;
};

export default Options;

Options.propTypes = {
  data: PropTypes.array,
  validateAnswer: PropTypes.func,
};
