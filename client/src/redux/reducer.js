import { ADD_FAV , REMOVE_FAV , DELETE_ALL ,  FILTER , ORDER } from "./types"

const initialState = {
    myFavorites: [],
    allCharacters: []
 };
 
 const rootReducer = ( state = initialState , { type , payload} ) => {
    console.log(state);
     switch(type){
         case  ADD_FAV:
            return { 
                ...state, 
                myFavorites: payload, 
                allCharacters: payload
            };
//Hay un problemita aca
        case  REMOVE_FAV:
            return { 
                ...state,
                myFavorites: payload,
                allCharacters: payload
            };

        case DELETE_ALL:
                if (payload === null) {
                    return {
                        ...state,
                        myFavorites: myFavorites.splice(0, myFavorites.length),
                        allCharacters: allCharacters.splice(0, allCharacters.length)
                    };
                }
                
        case FILTER:
            if (payload === null) {
                return {
                    ...state,
                    myFavorites: [...state.allCharacters],
                };
                } else {
                    const filterByGender = [...state.allCharacters].filter((favorite) => favorite.gender === payload);
                    return {
                        ...state,
                        myFavorites: filterByGender,
                    };
            }

        case  ORDER:
            const allCharactersFavCopy = [...state.allCharacters]
            const orden = () =>{
                if( payload === "A"){
                    return allCharactersFavCopy.sort((a, b) => a.id - b.id) //Ordenar de manera ascendente
                    
                } else if( payload === "D" ){
                    return allCharactersFavCopy.sort((a, b) => b.id - a.id) //Ordenar de manera descendente
                }
            }
            return {
                ...state,
                myFavorites: orden()
            }
            
            default: 
            return{
                ...state
            }
        }; 
}


export default rootReducer;


    
  