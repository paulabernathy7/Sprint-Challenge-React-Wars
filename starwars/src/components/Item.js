import React from 'react';
import Characters from './Characters';

const Item = props => {
    {/* here we're returning a component with JSX. the props are our items in our starwars array */}
    return (
        <div className="item">
          <h2 className="name"> {props.item.name}</h2>
          <div className="background">
             <p>Height: {props.item.height}</p>
             <p>Mass: {props.item.mass}</p>
             <p>Hair Color: {props.item.hair_color}</p>
             <p>Skin Color: {props.item.skin_color}</p>
          </div>



        </div>
      )
}

export default Item