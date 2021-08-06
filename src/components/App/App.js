import React, { Component } from "react";
import Characters from "../Characters/Characters";
import Quote from "../Quote/Quote";
import "./App.css";
import { getMainCharacters, getCharacterQuote } from "../../apiCalls.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      characterIds: [
        "5cd99d4bde30eff6ebccfbe6",
        "5cd99d4bde30eff6ebccfc07",
        "5cd99d4bde30eff6ebccfc38",
        "5cd99d4bde30eff6ebccfc57",
        "5cd99d4bde30eff6ebccfcc8",
        "5cd99d4bde30eff6ebccfcef",
        "5cd99d4bde30eff6ebccfc15",
        "5cd99d4bde30eff6ebccfd06",
        "5cd99d4bde30eff6ebccfea0",
        "5cd99d4bde30eff6ebccfd23",
        "5cd99d4bde30eff6ebccfe9e",
        "5cd99d4bde30eff6ebccfd81",
        "5cd99d4bde30eff6ebccfc7c",
        "5cd99d4bde30eff6ebccfe2e",
        "5cd99d4bde30eff6ebccfd0d",
        "5cd99d4bde30eff6ebccfea4",
        "5cd99d4bde30eff6ebccfe19",
        "5cdbdecb6dc0baeae48cfa59",
      ],
      quotes: [],
      error: "",
    };
  }

  // componentDidMount() {
  //   getMainCharacters()
  //     .then((data) => this.setState({ characters: data.docs }))
  //     .then(() => this.setQuote());
  // }

  // If i had state that already had ALL the IDs
  // componentDidMount() {
  //   getMainCharacters()
  //     .then((data) => {
  //       this.setState({ characters: data.docs });
  //       return getCharacterQuote(this.state.characterId[this.randomNum(19)]);
  //     })
  //     .then((data) =>
  //       this.setState({
  //         quote: data.docs[this.randomNum(data.docs.length)]["dialog"],
  //       })
  //     );
  // }

  // If i had state that already had ALL the IDs
  componentDidMount() {
    getMainCharacters().then((data) => {
      this.setState({ characters: data.docs });
      return this.state.characterIds.forEach((characterId) =>
        getCharacterQuote(characterId).then((data) =>
          this.setState({ quotes: [...this.state.quotes, data] })
        )
      );
    });
  }

  // componentDidMount() {
  //   getMainCharacters()
  //     .then((data) => this.setState({ characters: data.docs }))
  //     .then(() => this.setQuotes());
  // }

  // setQuotes = () => {
  //   return this.state.characterIds.forEach((characterId) =>
  //     getCharacterQuote(characterId)
  //     .then((data) =>
  //       this.state.quotes.push(data)
  //     )
  //   );
  // };

  randomNum = (num) => {
    let randomNum = Math.floor(Math.random() * num + 1);
    return randomNum;
  };

  // setQuote = () => {
  //   if (this.state.characters.length) {
  //     let randomCharacterId =
  //       this.state.characters[this.randomNum(this.state.characters.length)][
  //         "_id"
  //       ];
  //     getCharacterQuote(randomCharacterId).then((data) =>
  //       // run cleaning helper function here
  //       // whatever comes out of that cleaning function - use that variable to set state
  //       this.setState({
  //         quote: data.docs[this.randomNum(data.docs.length)]["dialog"],
  //       })
  //     );
  //   }
  // };

  render() {
    return (
      <main>
        <h1>Which hero of the Third Age spoke these words?</h1>
        <Characters characters={this.state.characters} />
        <Quote quote={this.state.quotes} />
      </main>
    );
  }
}

export default App;

// .catch(() =>
//         this.setState({
//           error: "Our apologies, we are experiencing a server issue",
//         })
//       );
