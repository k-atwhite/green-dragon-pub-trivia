import React from "react";
import "./Quote.css";
import { getCharacterQuote } from "../../apiCalls";

const Quote = ({ characters }) => {
  const randomNum = (num) => {
    let randomNum = Math.floor(Math.random() * num + 1);
    return randomNum;
  };

  const getRandomCharacter = (characters) => {
    let randomCharacter = characters[this.randomNum(19)];
    return randomCharacter.id;
  };

  const fetchQuotes = () => {
    getCharacterQuote(getRandomCharacter()).then((data) =>
      console.log(data.docs)
    );
  };

  return (
    <div>
      <h2>A Quote!</h2>
    </div>
  );
};

export default Quote;
