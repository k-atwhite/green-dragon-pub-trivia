import { useEffect, useState } from "react";
import "./Quote.css";
import { getCharacterQuotes } from "../../apiCalls.js";
import List from "../List/List";

const Quote = ({ characterId }) => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(characterId);

    setLoading(true);
    console.log("I got here");

    if (characterId) {
      getCharacterQuotes(characterId)
        .then((data) => setQuotes(data.docs))
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  }, [characterId]);

  useEffect(() => {
    if (quotes.length && !randomQuote) {
      console.log("there are quotes", quotes);
      setRandomQuote(quotes[0]["dialog"]);
    }
  }, [quotes]);

  return (
    <div className="quote-container">
      {loading && <h2>Data is loading</h2>}
      {quotes.length && <h2>{randomQuote}</h2>}
      {/* <List quotes={quotes} key={characterId} /> */}
    </div>
  );
};

export default Quote;
