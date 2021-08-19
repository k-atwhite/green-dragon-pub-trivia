import { useEffect, useState } from "react";
import { getAllCharacters } from "../../apiCalls.js";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Quote from "../Quote/Quote";
import Characters from "../Characters/Characters";
import CharacterQuotes from "../CharacterQuotes/CharacterQuotes";
import "./App.css";

const App = () => {
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then((data) => setAllCharacters(data.docs))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="entry-container">
              <h2>
                <span>
                  <img
                    src="https://img.icons8.com/color/48/000000/european-dragon.png"
                    alt="dragon-icon"
                  />
                </span>
                Welcome to Trivia at the Green Dragon
                <span>
                  <img
                    src="https://img.icons8.com/color/48/000000/european-dragon.png"
                    alt="dragon-icon"
                  />
                </span>
              </h2>
              <h3 className="entry-text">
                Test your memory and honor our heros of the Third Age
              </h3>
              <h3 className="entry-text">best of luck to you!</h3>
              <Link className="link entry-text begin" to="/trivia">
                ...Begin...
              </Link>
              <Link to="/heroes" className=" link practice-text">
                Click Here to pratice...
              </Link>
            </div>
          )}
        />
        <Route
          exact
          path="/trivia"
          render={() => <Quote allCharacters={allCharacters} />}
        />
        <Route
          exact
          path="/heroes"
          render={() => <Characters characters={allCharacters} />}
        />
        <Route
          path="/heroes/:name"
          render={({ match }) => {
            const hero = allCharacters.find(
              (character) => character.name === match.params.name
            );
            return <CharacterQuotes hero={hero} />;
          }}
        />
      </Switch>
      <Redirect to={"/trivia"} />
    </main>
  );
};

export default App;
