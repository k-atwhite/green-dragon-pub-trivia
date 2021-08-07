import { useEffect, useState } from "react";
import { getMainCharacters, getCharacterQuotes } from "../../apiCalls.js";
// import List from "../List/List";
import Quote from "../Quote/Quote";

import "./App.css";

const App = () => {
  const [character, setCharacter] = useState([]);
  // const [quotes, setQuotes] = useState([]);
  // const [characterIds] = useState([
  //   "5cd99d4bde30eff6ebccfbe6",
  //   "5cd99d4bde30eff6ebccfc07",
  //   "5cd99d4bde30eff6ebccfc38",
  //   "5cd99d4bde30eff6ebccfc57",
  //   "5cd99d4bde30eff6ebccfcc8",
  //   "5cd99d4bde30eff6ebccfcef",
  //   "5cd99d4bde30eff6ebccfc15",
  //   "5cd99d4bde30eff6ebccfd06",
  //   "5cd99d4bde30eff6ebccfea0",
  //   "5cd99d4bde30eff6ebccfd23",
  //   "5cd99d4bde30eff6ebccfe9e",
  //   "5cd99d4bde30eff6ebccfd81",
  //   "5cd99d4bde30eff6ebccfc7c",
  //   "5cd99d4bde30eff6ebccfe2e",
  //   "5cd99d4bde30eff6ebccfd0d",
  //   "5cd99d4bde30eff6ebccfea4",
  //   "5cd99d4bde30eff6ebccfe19",
  //   "5cdbdecb6dc0baeae48cfa59",
  // ]);

  useEffect(() => {
    getMainCharacters().then((data) => setCharacter(data));

    // characterIds.forEach((characterId) =>
    //   getCharacterQuote(characterId).then((data) =>
    //     setQuotes([...quotes, data.docs])
    //   )
    // );
  }, []);

  return (
    <main>
      {/* <h2>- {quote}</h2> */}
      <h2>- {character.name}</h2>
      {/* <List quotes={quotes} speaker={character.name} /> */}
      <Quote characterId={character._id} />
    </main>
  );
};

export default App;
