import { useEffect, useState } from "react";
import "./Quote.css";
import { getCharacterQuotes } from "../../apiCalls.js";

const Quote = ({ characterId }) => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(characterId);

    setLoading(true);

    getCharacterQuotes(characterId)
      .then((data) => setQuotes(data.docs))
      .catch((err) => {
        console.log(err);
      })
      .then(() =>
        setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)].dialog)
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="quote-container">
        <h2>Data is loading</h2>
      </div>
    );
  }
  return (
    <div className="quote-container">
      <h2>{randomQuote}</h2>
    </div>
  );
};

export default Quote;
