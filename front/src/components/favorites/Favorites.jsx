// import React from 'react';
// import { connect } from 'react-redux';
// import Card from '../Card';


// const Favorites = ({ myFavorites }) => {
//     return (
//       <div>
//         <h1>Personajes Favoritos</h1>
//         <div className="favorite-characters">
//           {myFavorites.map((character) => (
//             <Card
//               key={character.id}
//               id={character.id}
//               name={character.name}
//               image={character.image}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   };

// const mapStateToProps = (state) => ({
//     myFavorites: state.myFavorites, // Obtén myFavorites del estado global
//   });

//   export default connect(mapStateToProps)(Favorites);











import { useSelector , useDispatch } from 'react-redux';
import Cards from '../cards/Cards';
import { filterCards, orderCards } from "../../redux/action";
import { useState } from 'react';

  const Favorites = () =>{

    const  myFavorites  = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch()
    const [ aux , setAux ] = useState(false)

    const handleOrder = (event) =>{
      dispatch( orderCards(event.target.value))
      setAux(true)
    }

    const handleFilter = (event) =>{
      dispatch( filterCards(event.target.value))
    }

    return(
        <div>
            <h1>Personajes Favoritos</h1>
            <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">unknown</option>
            </select>

            <Cards characters= {myFavorites}/>
        </div>
      )
  }

  export default Favorites;