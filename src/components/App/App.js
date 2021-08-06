import { useEffect, useState } from "react";
import "./App.css";
import { getMainCharacters } from "../../apiCalls.js";

const App = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  // const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState();

  useEffect(() => {
    getMainCharacters()
      .then((data) => setAllCharacters(data.docs))
      .then(() => {
        let randomCharacter =
          allCharacters[Math.floor(Math.random() * allCharacters.length)];
        setCharacter(randomCharacter);
      });
  }, []);

  return (
    <main>
      {/* <h1>{quote}</h1> */}
      {/* <h2>- {character}</h2> */}
    </main>
  );
};

export default App;
