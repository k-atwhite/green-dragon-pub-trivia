import React from "react";
import "./Character.css";
import PropTypes from "prop-types";

const Character = ({ name, race, gender, realm, birth, wikiUrl }) => {
  if (!name) {
    return (
      <h2>We are having trouble fetching that information</h2>
    )
  }
  return (
    <div className="card character" id={name}>
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
