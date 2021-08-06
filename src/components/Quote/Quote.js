import React from "react";
import "./Quote.css";

const Quote = ({ quote }) => {
  return (
    <div className="quote-container">
      <h2>{quote}</h2>
    </div>
  );
};

export default Quote;
