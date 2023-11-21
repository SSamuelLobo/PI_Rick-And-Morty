import { ADD_FAV , REMOVE_FAV , DELETE_ALL , FILTER , ORDER } from "./types"

import axios from "axios";
const endpoint = 'http://localhost:3001/rickandmorty/fav';

// ACTION | addFav
export const addFav =  (character) => {
   return async (dispatch) => {
      try {
         const {data} = await axios.post(endpoint, character)
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         throw Error(error.message);
      }
   };
};

export const removeFav = (id) => {
  return async (dispatch) => {
     try {
         const { data } = await axios.delete(`${endpoint}/${id}`)
     
         return dispatch({
             type: REMOVE_FAV,
             payload: data,
         });
     } catch (error) {
         throw Error(error.message);
     }
 };
};


export const deleteAllFav = ()=>{
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${endpoint}/deleteAllFav`)
            return dispatch({
                type: DELETE_ALL,
                payload: data,
            });
        } catch (error) {
            throw Error(error.message);
        }
    };
}


export const filterCards = (gender) =>{
    return { type: FILTER , payload: gender }
}

export const orderCards = (order) =>{
    return { type: ORDER , payload: order }
}

