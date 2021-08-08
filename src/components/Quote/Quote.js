import { useEffect, useState } from "react";
import "./Quote.css";
import { getCharacterQuotes } from "../../apiCalls.js";
import Options from "../Options/Options";

const Quote = ({ allCharacters }) => {
  const [character, setCharacter] = useState({});
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

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
          setError(`${err}:trouble loading character...`);
        })
        .finally(() => setLoading(false));
    }
  }, [character]);

  useEffect(() => {
    if (quotes.length && !randomQuote) {
      setRandomQuote(quotes[0]["dialog"]);
    }
  }, [quotes]);

  const validateAnswer = (id) => {
    if (id === character.name) {
      setResponse("Well done, that's correct");
    } else {
      setResponse(`Actually, that was ${character.name}`);
    }
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };

  return (
    <div className="quote-container">
      {error && <h2>{error}</h2>}
      {loading && <h2>loading quote...</h2>}
      {quotes.length && (
        <div>
          {!response && <h2>Who said the words...</h2>}
          {response && <h2>{response}</h2>}
          <h2>{randomQuote}</h2>
          <div className="character-guesses">
            <Options
              data={allCharacters}
              validateAnswer={validateAnswer}
            ></Options>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quote;
