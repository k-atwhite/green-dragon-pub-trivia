import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ dialog, id }) => {
  return (
    <div className="quote-card" key={id}>
      <h2>{dialog}</h2>
    </div>
  );
};

export default QuoteCard;
