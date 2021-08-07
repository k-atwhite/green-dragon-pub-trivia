import { useEffect, useState } from "react";
import { getAllCharacters } from "../../apiCalls.js";
import { Route, Switch, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Quote from "../Quote/Quote";
import "./App.css";

const App = () => {
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters().then((data) => setAllCharacters(data.docs));
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
          render={() => <h1>You have not added heroes yet</h1>}
        />
        <Route
          exact
          path="/wise-words"
          render={() => <h1>You have not added quotes yet</h1>}
        />
      </Switch>
    </main>
  );
};

export default App;
