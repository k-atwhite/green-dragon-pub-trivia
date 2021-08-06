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
      quote: [],
      error: "",
    };
  }

  componentDidMount() {
    getMainCharacters()
      .then((data) => this.setState({ characters: data.docs }))
      .then(() => this.setQuote());
  }

  randomNum = (num) => {
    let randomNum = Math.floor(Math.random() * num + 1);
    return randomNum;
  };

  setQuote = () => {
    if (this.state.characters.length) {
      let randomCharacterId =
        this.state.characters[this.randomNum(this.state.characters.length)][
          "_id"
        ];
      getCharacterQuote(randomCharacterId).then((data) =>
        this.setState({
          quote: data.docs[this.randomNum(data.docs.length)]["dialog"],
        })
      );
    }
  };

  render() {
    return (
      <main>
        <nav></nav>
        <h1>Who Said...?</h1>
        <Characters characters={this.state.characters} />
        <Quote quote={this.state.quote} />
        <Characters />
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
