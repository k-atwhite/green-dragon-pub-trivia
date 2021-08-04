import React, { Component } from "react";
import Characters from "./Characters";
import "./App.css";
import { fetchAllCharacters } from "../../apiCalls.js";

class App extends Components {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      error: "",
    };
  }

  displayCharacters = () => {
    fetchAllCharacters()
      .then((data) => this.setState({ characters: data.docs }))
      .catch(() =>
        this.setState({
          error: "Our apoloies, we are experiencing a server issue",
        })
      );
  };

  render() {
    return (
      <main>
        <h1>Those of Middle Earth</h1>
        <Characters characters={this.state.characters} />
      </main>
    );
  }
}

export default App;
