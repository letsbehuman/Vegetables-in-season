import React from "react";
import Card from "./Card";

const CardList = ({ vegetables }) => {
  return (
    <div>
      {vegetables.map((vegetable) => {
        return (
          <Card
            key={vegetable.id}
            id={vegetable.id}
            name={vegetable.name}
            type={vegetable.type}
            season={vegetable.season}
          />
        );
      })}
    </div>
  );
};

export default CardList;
