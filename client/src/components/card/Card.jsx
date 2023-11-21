import { Link , useLocation} from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { useState , useEffect } from "react";
import { addFav , removeFav } from "../../redux/action"
import "./card.css" ;

 const Card = ({id, name, image, onClose, gender }) => {

   const dispatch = useDispatch()
   const {myFavorites} = useSelector((state) => state ) ; //debe eleminarla de myFavorite
   const { pathname } = useLocation()
   const [ isFav , setIsFav ] = useState(false)
   const [animate, setAnimate] = useState(false);

   const handleFavorite = () =>{
         if(isFav){
               setIsFav(false)
               dispatch( removeFav(id) )
            } else {
               setIsFav(true)
               dispatch( addFav( { id, name, image, onClose, gender } ) );
            }
      }
      console.log(myFavorites);
      useEffect(() => {
            // Comprueba si el personaje está en tus favoritos
         myFavorites?.forEach((fav) => {
           if (fav.id === id) {
               setIsFav(true);         //si es true va mostrar el boton con el corazon        
            }
         });
      }, [myFavorites]); // Agrega id y myFavorites como dependencias

/*------------------------------------------------------------------------------------------------------------------------------------ */
      /*Efecto de animacion aparece y desaparece*/ 
      useEffect(() => {
         setAnimate(true);
     }, []);

     const handleClose = () => {
      setAnimate(false);
      setTimeout(() => {
        onClose(id);
      }, 400); // Retrasa el cierre durante la duración de la animación (0.4 segundos)
    };

/*------------------------------------------------------------------------------------------------------------------------------------ */

   return (
            <div className={`card ${isFav ? 'favorite' : ''} ${animate ? 'blur-in-expand' : 'blur-out-expand'}`}>
               <div className="card__a">
                  {
                     isFav ? (<a className="card-a-favorite-like" onClick={handleFavorite}>❤️</a>) : (<a className="card-a-favorite-unlike" onClick={handleFavorite}>🤍</a>)
                  }
                  <h2 className="card__buttons-h1">{id}</h2>
                  {
                  pathname !== "/favorites" ? <a className="card-a-onclose" onClick={handleClose}>X</a> : "" //como se entera que character 
                  //debe eliminar? es decir ya tiene la id solo falta que lo ejecuten ?
                  }
               </div>
               <Link to={`/detail/${id}`} >
               <h2 className={`card-name ${isFav ? 'red-bg' : ''}`}>{name}</h2>
               </Link>
               <Link to={`/detail/${id}`} >
               <img className="card-image" src={image} alt={name} />
               </Link>
            </div>
         );
}

export default Card;