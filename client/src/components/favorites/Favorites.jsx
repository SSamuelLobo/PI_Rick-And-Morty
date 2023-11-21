import { useSelector , useDispatch } from 'react-redux';
import Cards from '../cards/Cards';
import { filterCards, orderCards , deleteAllFav  } from "../../redux/action";
import { useState } from 'react';

/*Styles*/
import "./favorites.css" ;


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

    const handleDeleteAllFavorite = () =>{
      dispatch(deleteAllFav())
    }
    
    return(
        <div className='favorite-container'>
            <h1 className='favorite-container__h1'>Favorites</h1>
            
            <div className='favorite-container__select-container'>
            
            <select className='favorite-container__select-container__select1' onChange={handleOrder}>
            <option selected disabled>Order</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
            </select>
            
            <select className='favorite-container__select-container__select2' onChange={handleFilter}>
            <option selected disabled>Gender</option>
            <option value="All">AllCharacters</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">unknown</option>
            </select>
            
            <button className='favorite-container__select-container__button-delete' onClick={handleDeleteAllFavorite}>Delete AllFavorites</button>
            </div>

            <Cards characters={myFavorites} className={aux ? 'descend-row' : ''} />
        </div>
      )
  }

  export default Favorites;


//   const handleAllCharacters = () =>{
//     dispatch(allCharactersFav() )
// }

// <option value="AllCharacters" onChange={handleAllCharacters}>AllCharacters</option>