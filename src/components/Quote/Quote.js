import { useEffect, useState } from "react";
import "./Quote.css";
import { getCharacterQuotes } from "../../apiCalls.js";

const Quote = ({ characterId }) => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    if (characterId) {
      getCharacterQuotes(characterId).then((data) => setQuotes(data.docs));
    }
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)].dialog);
  }, []);

  return (
    <div className="quote-container">
      <h2>{randomQuote}</h2>
    </div>
  );
};

export default Quote;
