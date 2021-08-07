import { useEffect, useState } from "react";
import { getMainCharacters } from "../../apiCalls.js";
import Quote from "../Quote/Quote";
import { Route, Switch, NavLink } from "react-router-dom";

import "./App.css";

const App = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getMainCharacters().then((data) => setCharacter(data.docs[0]));
  }, []);

  return (
    <main>
      <nav>
        <NavLink exact to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink exact to="/trivia" className="nav-link">
          Quote Trivia
        </NavLink>
        <NavLink exact to="/wise-words" className="nav-link">
          Wise Words
        </NavLink>
      </nav>
      <Route path="/" />
      <h2>Hero: {character.name}</h2>
      <Quote characterId={character._id} />
    </main>
  );
};

export default App;
