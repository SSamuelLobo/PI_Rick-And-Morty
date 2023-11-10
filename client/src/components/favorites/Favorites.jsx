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
      setAux(!aux)
    }

    const handleFilter = (event) =>{
      if(event.target.value === "Male" || event.target.value === "Female" || event.target.value === "Genderless" || event.target.value === "unknown"){
        dispatch(filterCards(event.target.value))
      } else {
        dispatch(filterCards(null))
      }
    }

    return(
        <div>
            <h1>Personajes Favoritos</h1>
            <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
            <option value="All">AllCharacters</option>
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


//   const handleAllCharacters = () =>{
//     dispatch(allCharactersFav() )
// }

// <option value="AllCharacters" onChange={handleAllCharacters}>AllCharacters</option>