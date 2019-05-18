import React from "react";
import Item from "./Item"

const Characters = props => {
  return (
    <div>
       {props.starwarsChars.map( char => {
          return (
            < Item item={char} />
          )
        })}
    </div>
  );
};

export default Characters;
