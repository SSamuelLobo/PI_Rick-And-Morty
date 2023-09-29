import { ADD_FAV , REMOVE_FAV , FILTER , ORDER } from "./types"

const initialState = {
    myFavorites: [],
    allCharacters: []
 };
 
 const rootReducer = ( state = initialState , { type , payload} ) => {
     switch(type){
         case  ADD_FAV:
             return{
                ...state,
                myFavorites: [...state.allCharacters, payload] ,
                allCharacters: [...state.allCharacters, payload], // Agregar el nuevo producto al arreglo
            }
//Hay un problemita aca
        case  REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((character) =>{
                    return character.id !== parseInt(payload)
                }),
                allCharacters: state.allCharacters.filter((character) =>{
                    return character.id !== parseInt(payload)
                })

            }

        case  FILTER:
            const filterByGender = [...state.allCharacters].filter((favorite) => favorite.gender === payload);

            return {
                ...state,
                myFavorites: filterByGender
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