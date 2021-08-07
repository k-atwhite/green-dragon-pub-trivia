import React from "react";
import Card from "../Card/Card";
import "./List.css";

const List = ({ data }) => {
  let quoteCards = data.map((character) => {
    return (
      <Card
        name={character.name}
        key={character._id}
        race={character.race}
        gender={character.gender}
        realm={character.realm}
        birthday={character.birth}
        // wikiUrl={character.wikiUrl}
      />
    );
  });

  return <div className="list-container">{quoteCards}</div>;
};

export default List;
