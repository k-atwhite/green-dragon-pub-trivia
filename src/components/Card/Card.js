import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ name, validateAnswer }) => {
  return (
    <button
      className="card"
      id={name}
      onClick={(event) => validateAnswer(event.target.id)}
    >
      {name}
    </button>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  validateAnswer: PropTypes.func,
};
