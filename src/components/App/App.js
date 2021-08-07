import { useEffect, useState } from "react";
import {
  getMainCharacter,
  getCharacterQuotes,
  getAllCharacters,
} from "../../apiCalls.js";
import { Route, Switch, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Quote from "../Quote/Quote";
import "./App.css";

const App = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  // const [quotes, setQuotes] = useState([]);
  // const [randomQuote, setRandomQuote] = useState("");
  // const [loading, setLoading] = useState(false);

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
