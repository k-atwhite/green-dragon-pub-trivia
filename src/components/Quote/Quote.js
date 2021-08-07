import { useEffect, useState } from "react";
import "./Quote.css";
import { getCharacterQuotes } from "../../apiCalls.js";
import List from "../List/List";

const Quote = ({ character }) => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (character) {
      getCharacterQuotes(character._id)
        .then((data) => setQuotes(data.docs))
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  }, [character]);

  useEffect(() => {
    if (quotes.length && !randomQuote) {
      setRandomQuote(quotes[0]["dialog"]);
    }
  }, [quotes]);

  return (
    <div className="quote-container">
      {loading && <h2>Data is loading</h2>}
      {quotes.length && (
        <div>
          <h2>{randomQuote}</h2>
          <h3>{character.name}</h3>
        </div>
      )}
      {/* <List quotes={quotes} key={characterId} /> */}
    </div>
  );
};

export default Quote;
