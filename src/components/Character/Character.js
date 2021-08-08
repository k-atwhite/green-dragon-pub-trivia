import React from "react";
import "./Character.css";
import PropTypes from "prop-types";

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

Character.propTypes = {
  name: PropTypes.string,
  race: PropTypes.string,
  gender: PropTypes.string,
  realm: PropTypes.string,
  birth: PropTypes.string,
  wikiUrl: PropTypes.string,
};
