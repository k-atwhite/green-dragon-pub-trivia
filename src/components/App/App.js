import { useEffect, useState } from "react";
import { getMainCharacter, getCharacterQuotes } from "../../apiCalls.js";
import { Route, Switch } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

import "./App.css";

const App = () => {
  const [character, setCharacter] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMainCharacter().then((data) => setCharacter(data.docs[0]));
  }, []);

  useEffect(() => {
    setLoading(true);

    if (character) {
      getCharacterQuotes(character._id)
        .then((data) => setQuotes(data.docs))
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  }, [character]);

  useEffect(() => {
    if (quotes.length && !randomQuote) {
      setRandomQuote(quotes[0]["dialog"]);
    }
  }, [quotes]);

  return (
    <main>
      <NavBar />
      <Switch>
        <Route exact path="/" />
        <Route
          exact
          path="/trivia"
          render={() => (
            <div className="quote-container">
              {loading && <h2>Data is loading</h2>}
              {quotes.length && (
                <div>
                  <h2>{randomQuote}</h2>
                  <h3>{character.name}</h3>
                </div>
              )}
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

// import { useEffect, useState } from "react";
// import { getMainCharacters } from "../../apiCalls.js";
// import Quote from "../Quote/Quote";
// import { Route, Switch, NavLink } from "react-router-dom";

// import "./App.css";

// const App = () => {
//   const [character, setCharacter] = useState([]);

//   useEffect(() => {
//     getMainCharacters().then((data) => setCharacter(data.docs[0]));
//   }, []);

//   return (
//     <main>
//       <nav>
//         <NavLink exact to="/" className="nav-link">
//           Home
//         </NavLink>
//         <NavLink exact to="/trivia" className="nav-link">
//           Quote Trivia
//         </NavLink>
//         <NavLink exact to="/heroes" className="nav-link">
//           Heroes
//         </NavLink>
//         <NavLink exact to="/wise-words" className="nav-link">
//           Wise Words
//         </NavLink>
//       </nav>
//       <Route path="/" />
//       <Route path="/trivia" render={() => <Quote character={character} />} />
//     </main>
//   );
// };

// export default App;
