import React from "react";
import Item from "./Item"

const Characters = props => {
  return (
    <div>
      {/* here we're mapping over our starwars characters array to get each item. we're then returning our item component. we're passing the char as a prop to it */}
       {props.starwarsChars.map( char => {
          return (
            < Item item={char} />
          )
        })}
    </div>
  );
};

export default Characters;
