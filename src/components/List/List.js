import React from "react";
import Card from "../Card/Card";
import "./List.css";

const List = ({ data, validateAnswer }) => {
  let cards = data.map((character) => {
    return (
      <Card
        name={character.name}
        key={character._id}
        id={character._id}
        race={character.race}
        gender={character.gender}
        realm={character.realm}
        birthday={character.birth}
        validateAnswer={validateAnswer}
        // wikiUrl={character.wikiUrl}
      />
    );
  });

  return <div className="list-container">{cards}</div>;
};

export default List;
