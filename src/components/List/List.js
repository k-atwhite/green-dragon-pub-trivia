import React from "react";
import Card from "../Card/Card";
import "./List.css";

const List = ({ data }) => {
  let quoteCards = data.map((character) => {
    return <Card name={character.name} key={character._id} />;
  });

  return <div className="quotes-container">{quoteCards}</div>;
};

export default List;
