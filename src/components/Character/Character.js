import React from "react";
import "./Character.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Character = ({ name, race, gender, realm, birth }) => {
  if (!name) {
    return <h2>We are having trouble fetching that information</h2>;
  }
  return (
    <Link to={`/heroes/${name}`}>
      <div className="character card" id={name}>
        <p className="name">{name}</p>
        {race && <p>race: {race}</p>}
        {gender && <p>gender: {gender}</p>}
        {realm && <p>realm: {realm}</p>}
        {birth && <p>birth: {birth}</p>}
      </div>
    </Link>
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
