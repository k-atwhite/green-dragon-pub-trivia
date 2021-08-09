import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ dialog, key }) => {
  return (
    <div className="quote-card" key={key}>
      <h2>{dialog}</h2>
    </div>
  );
};

export default QuoteCard;