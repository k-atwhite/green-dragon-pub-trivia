import { useEffect, useState } from "react";
import { getCharacterQuotes } from "../../apiCalls.js";
import QuoteCard from "../QuoteCard/QuoteCard";
import "./CharacterQuotes.css";

const CharacterQuotes = ({ hero }) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    if (!quotes.length) {
      getCharacterQuotes(hero._id).then((data) => setQuotes(data.docs));
    }
  }, [quotes]);

  if (quotes.length) {
    let quoteCards = quotes.map((quote) => {
      return <QuoteCard dialog={quote.dialog} key={quote._id} />;
    });

    return (
      <div>
        <h2>Words of: {hero.name}</h2>
        <div className="quote-cards-container">{quoteCards}</div>;
      </div>
    );
  }
  return <h2>Trouble loading quotes...</h2>;
};

export default CharacterQuotes;
