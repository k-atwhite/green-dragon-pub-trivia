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
      quotes: [],
      error: "",
    };
  }

  randomNum = (num) => {
    let randomNum = Math.floor(Math.random() * num + 1);
    return randomNum;
  };

  componentDidMount = () => {
    getMainCharacters()
      .then((data) => this.setState({ characters: data.docs }))
      .catch(() =>
        this.setState({
          error: "Our apoloies, we are experiencing a server issue",
        })
      );
    // getCharacterQuote().then((data) =>
    //   this.setState({ quotes: data.docs })
    // );
    this.fetchRandomQuote();
  };

  fetchRandomQuote = () => {
    let randomCharacter = this.state.characters[5];
    getCharacterQuote(randomCharacter.id).then((data) =>
      this.setState({ quotes: data.docs })
    );
  };

  render() {
    return (
      <main>
        <h1>Who Said...?</h1>
        <Characters characters={this.state.characters} />
        {/* <Quote characters={this.state.characters} /> */}
      </main>
    );
  }
}

export default App;
