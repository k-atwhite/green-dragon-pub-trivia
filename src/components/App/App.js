import React, { Component } from "react";
import Characters from "../Characters/Characters";
import Quote from "../Quote/Quote";
import "./App.css";
import { getMainCharacters } from "../../apiCalls.js";
import { getQuote } from "../../apiCalls.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      quote: "",
      choices: [],
      error: "",
    };
  }

  componentDidMount = () => {
    getMainCharacters()
      .then((data) => this.setState({ characters: data.docs }))
      .catch(() =>
        this.setState({
          error: "Our apoloies, we are experiencing a server issue",
        })
      );
  };

  chooseRandomCharacter = () => {
    let randomNum = Math.floor(Math.random() * 19);
  };

  render() {
    return (
      <main>
        <h1>Who Said...?</h1>
        {/* <Characters characters={this.state.characters} /> */}
        <Quote quote={this.state.quote} />
      </main>
    );
  }
}

export default App;
