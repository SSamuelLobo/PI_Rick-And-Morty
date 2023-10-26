import React from 'react';
import Card from '../card/Card';

/*Styles*/
import './cards.css';

const Cards = ({characters, onClose}) => {
   return (
   <div className="cards-container">
      {characters.map(({id, name, image, gender})=>{
         return (
            <Card 
            key={id}
            id={id}
            name={name}
            image={image}
            gender={gender}
            onClose={onClose}
         />
         ) 
      })}
   </div>);
}

export default Cards;







//Personajes sin destructuring

// export default function Cards(props) {
//    return (<div>
//       {props.map((personajes, i)=>{
//          <Card 
//          key={i}
//          name={personajes.name}
//          species={personajes.species}
//          status={personajes.status}
//          gender={personajes.gender}
//          origin={personajes.origin.name}
//          />
//       }) }
//    </div>);
// }
