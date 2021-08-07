import { useEffect, useState } from "react";
import "./App.css";
import { getMainCharacters, getCharacterQuote } from "../../apiCalls.js";
// import Quote from "../Quote/Quote";

const App = () => {
  const [character, setCharacter] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [characterIds] = useState([
    "5cd99d4bde30eff6ebccfbe6",
    "5cd99d4bde30eff6ebccfc07",
    "5cd99d4bde30eff6ebccfc38",
    "5cd99d4bde30eff6ebccfc57",
    "5cd99d4bde30eff6ebccfcc8",
    "5cd99d4bde30eff6ebccfcef",
    "5cd99d4bde30eff6ebccfc15",
    "5cd99d4bde30eff6ebccfd06",
    "5cd99d4bde30eff6ebccfea0",
    "5cd99d4bde30eff6ebccfd23",
    "5cd99d4bde30eff6ebccfe9e",
    "5cd99d4bde30eff6ebccfd81",
    "5cd99d4bde30eff6ebccfc7c",
    "5cd99d4bde30eff6ebccfe2e",
    "5cd99d4bde30eff6ebccfd0d",
    "5cd99d4bde30eff6ebccfea4",
    "5cd99d4bde30eff6ebccfe19",
    "5cdbdecb6dc0baeae48cfa59",
  ]);

  useEffect(() => {
    getMainCharacters().then((data) => setCharacter(data));

    characterIds.forEach((characterId) =>
      getCharacterQuote(characterId).then((data) =>
        setQuotes([...quotes, data.docs])
      )
    );
  }, []);

  return (
    <main>
      {/* <h2>- {quote}</h2> */}
      {/* <Quote characterId={character["_id"]} /> */}
      <h2>- {character.name}</h2>
    </main>
  );
};

export default App;
