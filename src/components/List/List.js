import React from "react";
import Card from "../Card/Card";
import "./List.css";

const List = ({ quotes, key }) => {
  console.log(quotes, "quotes");
  let quoteCards = quotes.map((quote) => {
    console.log(quote);
    return <Card dialog={quote.dialog} key={key} />;
  });

  return <div className="quotes-container">{quoteCards}</div>;
};

export default List;
