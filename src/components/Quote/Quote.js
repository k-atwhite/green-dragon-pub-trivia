import { useEffect, useState } from "react";
import "./Quote.css";
import { getCharacterQuotes } from "../../apiCalls.js";
import List from "../List/List";

const Quote = ({ allCharacters }) => {
  const [character, setCharacter] = useState({});
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

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

  const validateAnswer = (id) => {
    if (id === character.name) {
      setResponse("Well done, that's correct");
    } else {
      setResponse(`Actually, that was ${character.name}`);
    }
  };

  return (
    <div className="quote-container">
      {loading && <h2>loading quote...</h2>}
      {quotes.length && (
        <div>
          {!response && <h2>Who said the words...</h2>}
          {response && <h2>{response}</h2>}
          <h2>{randomQuote}</h2>
          <div className="character-guesses">
            <List data={allCharacters} validateAnswer={validateAnswer}></List>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quote;
