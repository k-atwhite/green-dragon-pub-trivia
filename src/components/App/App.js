import React, { Component } from "react";
import Characters from "../Characters/Characters";
import "./App.css";
import { fetchAllCharacters } from "../../apiCalls.js";

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
        <h1>Third Age Heroes</h1>
        <Characters characters={this.state.characters} />
      </main>
    );
  }
}

export default App;

/* Main characters:
Frodo
Gandalf
Aragorn
Legolas
Arwen
Galadriel
Gimli
Boromir
BIlbo
Sam
Gollum 
Saruman
Pippin
Merry
Elrond
Theoden
Faramir
Eowyn
*/
