import { useEffect, useState } from "react";
import "./Quote.css";
import { getCharacterQuote } from "../../apiCalls.js";

const Quote = ({ characterId }) => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getCharacterQuote(characterId);
  });

  return (
    <div className="quote-container">
      <h2>{quote}</h2>
    </div>
  );
};

export default Quote;
