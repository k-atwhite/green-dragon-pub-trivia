import { useEffect, useState } from "react";
import { getMainCharacters } from "../../apiCalls.js";
import Quote from "../Quote/Quote";

import "./App.css";

const App = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getMainCharacters().then((data) => setCharacter(data.docs[0]));

    // characterIds.forEach((characterId) =>
    //   getCharacterQuote(characterId).then((data) =>
    //     setQuotes([...quotes, data.docs])
    //   )
    // );
  }, []);

  return (
    <main>
      <h2>Hero: {character.name}</h2>
      <Quote characterId={character._id} />
    </main>
  );
};

export default App;
