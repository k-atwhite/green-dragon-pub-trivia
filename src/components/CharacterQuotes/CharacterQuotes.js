import { useEffect, useState } from "react";
import { getCharacterQuotes } from "../../apiCalls.js";
import QuoteCard from "../QuoteCard/QuoteCard";
import "./CharacterQuotes.css";

const CharacterQuotes = ({ hero }) => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    if (!quotes.length) {
      getCharacterQuotes(hero._id).then((data) => setQuotes(data.docs));
    }
  }, [quotes, hero._id]);

  if (!hero) {
    setError("We are having trouble loading quotes")
  }

  if (quotes.length) {
    let quoteCards = quotes.map((quote) => {
      return <QuoteCard dialog={quote.dialog} id={quote._id} />;
    });

    return (
      <div>
        {error && <h2 className="error-msg">{error}</h2>}
        <h2 className="words-of">The words of {hero.name}</h2>
        <div className="quote-cards-container">{quoteCards}</div>;
      </div>
    );
  }
  return <h2>Trouble loading quotes...</h2>;
};

export default CharacterQuotes;
