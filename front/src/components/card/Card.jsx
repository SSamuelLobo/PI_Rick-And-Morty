import { Link , useLocation} from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { useState , useEffect } from "react";
import { addFav , removeFav } from "../../redux/action"

 const Card = ({id, name, image, onClose, gender}) => {

   const dispatch = useDispatch()
   const {myFavorites} = useSelector((state) => state ) ;
   const { pathname } = useLocation()
   const [ isFav , setIsFav ] = useState(false)

   const handleFavorite = () =>{
         if(isFav){
               setIsFav(false)
               dispatch( removeFav(id))
            } else {
               setIsFav(true)
               dispatch( addFav( { id, name, image, onClose, gender } ) );
            }
      }

      useEffect(() => {
            // Comprueba si el personaje está en tus favoritos
         myFavorites?.forEach((fav) => {
           if (fav.id === id) {
               setIsFav(true);                 
            }
         });
      }, [myFavorites]); // Agrega id y myFavorites como dependencias

   return (
            <div>
               {
                  isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)
               }
               {
                  pathname !== "/favorites" ? <button onClick={() => onClose(id)}>X</button> : "" //como se entera que character 
                  //debe eliminar? es decir ya tiene la id solo falta que lo ejecuten ?
               }
               <Link to={`/detail/${id}`} >
               <h2 className="card-name">{name}</h2>
               </Link>
               <Link to={`/detail/${id}`} >
               <img src={image} alt={name} />
               </Link>
            </div>
         );
}

export default Card;