import { useEffect, useState } from "react";
import "./Quote.css";
import { getCharacterQuotes } from "../../apiCalls.js";

const Quote = ({ allCharacters }) => {
  const [character, setCharacter] = useState({});
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (allCharacters.length) {
      let randomCharacter =
        allCharacters[Math.floor(Math.random() * allCharacters.length)];
      setCharacter(randomCharacter);
    }
  }, [allCharacters]);

  useEffect(() => {
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
          <h2>Who said the words...</h2>
          <h2>{randomQuote}</h2>
          <h3>{character.name}</h3>
        </div>
      )}
    </div>
  );
};

export default Quote;
