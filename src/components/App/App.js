import { useEffect, useState } from "react";
import { getAllCharacters } from "../../apiCalls.js";
import { Route, Switch, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Quote from "../Quote/Quote";
import Characters from "../Characters/Characters";
import "./App.css";

const App = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [error, setError] = useState("");

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
              <p>Welcome to Trivia Night at the Green Dragon</p>
              <p>Test your memory and honor our heros of the Third Age</p>
              <p>best of luck to you</p>
              <Link to="/trivia">Begin</Link>
              {/* <Link to="/heroes">If you need to practice</Link> */}
            </div>
          )}
        />
        <Route
          exact
          path="/trivia"
          render={() => (
            <div className="quote-container">
              <Quote allCharacters={allCharacters} />
            </div>
          )}
        />
        <Route
          exact
          path="/heroes"
          render={() => <Characters characters={allCharacters} />}
        />
        {/* <Route
          exact path="/heroes/${name}"
        /> */}
      </Switch>
    </main>
  );
};

export default App;
