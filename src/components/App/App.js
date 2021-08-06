import { useEffect, useState } from "react";
import "./App.css";
import { getCharacterQuote, getMainCharacters } from "../../apiCalls.js";

const App = () => {
  // const [allCharacters, setAllCharacters] = useState([]);
  const [character, setCharacter] = useState([]);

  // useEffect(() => {
  //   getMainCharacters()
  //     .then((data) =>
  //       setCharacter(data.docs[Math.floor(Math.random() * data.docs.length)])
  //     )
  //     .then(() => getCharacterQuote(character["_id"]))
  //     .then((data) =>
  //       setQuote(
  //         data.docs[Math.floor(Math.random() * data.docs.length)]["dialog"]
  //       )
  //     );
  // }, []);

  useEffect(() => {
    getMainCharacters().then((data) => setCharacter(data));
  }, []);

  return (
    <main>
      {/* <h1>{quote}</h1> */}
      <h2>- {character.name}</h2>
    </main>
  );
};

export default App;
