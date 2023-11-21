/* style*/ 
import './App.css';

/*Component to Render*/
import Nav from './components/nav/Nav';
import Form from './components/form/Form';
import About from './components/about/About';
import Detail from './components/details/Detail';
import Cards from './components/cards/Cards.jsx';
import Favorites from "./components/favorites/Favorites"

/* hooks */
import { useState ,  useEffect } from 'react';
import { Routes, Route , useLocation , useNavigate } from "react-router-dom"

/*Global states*/
import { useDispatch } from 'react-redux';
import { removeFav } from "./redux/action"

/*dependecies */
import axios from 'axios';

/*Video de Fondo */
import backgroundVideo from './assets/Galaxiaa.mp4';

/* ICONOS */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" ;
import { faVolumeXmark , faVolumeHigh } from "@fortawesome/free-solid-svg-icons"


const App = () => {

   //Local states
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const [showConfirmation, setShowConfirmation] = useState(false);
   const [audioPlaying, setAudioPlaying] = useState(true);
   


  //Global States execution
  const dispatch = useDispatch()

   //Routings
  const location = useLocation();
  const navigate = useNavigate();

/*------------------------------------------------------------------------------------------------------------------------------------- */
/*Hay Problemas aca */
  //validation de acceso a la pagina
  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(`${URL}?email=${email}&password=${password}`);

      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    } catch (error) {
      throw Error(error.message);
    }
 }
/*------------------------------------------------------------------------------------------------------------------------------------- */


  
//salida de la pagina
const logout = () => {
  setShowConfirmation(true);
};
const handleLogoutConfirmed = () => {
  setAccess(false);
  setShowConfirmation(false);
};
const handleLogoutCancelled = () => {
  setShowConfirmation(false);
};

//validation
useEffect(() => {
  !access && navigate('/');
}, [access]);

/*---------------------------------------------------------------------------------------------------------------------------*/
/*Problemas Se estan repitiendo los personajes */
//Busca el caracter de la api , verifica que no este repetido y y actualiza el estado local
const onSearch = async (id) => {
  try {
      const characterRepeated = [...characters].map((char) => char.id);
  
      console.log(characterRepeated); //debo eliminar esto
  
      if (!characterRepeated.includes(Number(id))) {
          const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
          // ruta dinámica:
          const character = {
            id: parseInt(data.id),
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
          };
  
          if (character) {
            setCharacters((oldChars) => [...oldChars, character]);
          }

      } else {
      window.alert('¡Este personaje ya se encuentra en pantalla!');
      }

  } catch (error) {
      alert("¡No hay personajes con este ID!");
  }
};

// const onSearch = async (id) => {
//   const characterRepeated = characters.map((char) => char.id);

//   if (!characterRepeated.includes(Number(id))) {
//     try {
//       const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
//       const data = response.data;

//       if (data.name) {
//         setCharacters((oldChars) => [...oldChars, data]);
//       } else {
//         alert('¡No hay personajes con este ID!');
//       }
//     } catch (error) {
//       alert('Error al buscar el personaje: ' + error.message);
//     }
//   } else {
//     window.alert('¡Este personaje ya se encuentra en pantalla!');
//   }
// };
/*------------------------------------------------------------------------------------------------------------------------------------- */

 
/*Eliminar un personaje */
  const onClose = (id) => {
    const parsedId = parseInt(id);
    const filteredCharacters = characters.filter((character) => character.id !== parsedId);
    setCharacters(filteredCharacters);
    dispatch(removeFav(id))
  };

/*Eliminar todos los personajes */
  const deleteAllCharacters = () =>{
    setCharacters([])
  }


/*Reproduce la musica*/
    const toggleAudio = () => {
    const audio = document.getElementById("background-audio");
    if (audio) {
      if (audioPlaying) {
        audio.pause();
      } else {
      audio.play();
      }
      setAudioPlaying(!audioPlaying);
    }
  };


  return (
    <div className="App">
      {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} deleteAllCharacters={deleteAllCharacters}/>}
      
      {location.pathname !== '/' && 
        <audio id="background-audio" loop autoPlay>
          <source src="./src/assets/Rick Astley.mp3" type="audio/mpeg" />
        </audio>
      }

      {location.pathname !== '/' && 
        <button className="toggle-audio-button" onClick={toggleAudio}>
            {audioPlaying ? 
              <FontAwesomeIcon icon={faVolumeHigh} className="icon-audio"/> : 
              <FontAwesomeIcon icon={faVolumeXmark} className="icon-audio"/>
            }
        </button>
      }

        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        

      {location.pathname === '/home' && <h1 className='App__h1'>Home</h1>}
      
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>

      {showConfirmation && (
        <div className="confirmation-dialog">
          <p className="confirmation-dialog__p">Are you sure you want to go out?</p>
          <button className="confirmation-dialog-yes" onClick={handleLogoutConfirmed}>Yes</button>
          <button className="confirmation-dialog-no" onClick={handleLogoutCancelled}>No</button>
        </div>
      )}

    </div>
  );
};

export default App;




















// /* style*/ 
// import './App.css';

// /*Component to Render*/
// import Nav from './components/nav/Nav';
// import Form from './components/form/Form';
// import About from './components/about/About';
// import Detail from './components/details/Detail';
// import Cards from './components/cards/Cards.jsx';
// import Favorites from "./components/favorites/Favorites"

// /* hooks */
// import { useState ,  useEffect } from 'react';
// import { Routes, Route , useLocation , useNavigate } from "react-router-dom"

// /*dependecies */
// import axios from 'axios';


// /*credentials */
// const EMAIL =  "samuel.sgcs768@gmail.com"
// const PASSWORD = "xd123*"

// const App = () => {

//   const [characters, setCharacters] = useState([]);
//   const [access, setAccess] = useState(false);

//   /*---------------------------------------------------------------------------------------- */
//   //OJITO ACAA 👀
//   //// Conjunto de IDs de personajes existentes
//   /*(Set) es un tipo de objeto. Es una estructura de datos incorporada que representa una colección de valores únicos*/

//   const [existingCharacterIds, setExistingCharacterIds] = useState(new Set()); 
//   /*------------------------------------------------------------------------------------------*/ 
//   console.log(existingCharacterIds);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const login = (userData) => {
//     if (userData.password === PASSWORD && userData.email === EMAIL) {
//       setAccess(true);
//       navigate('/home');
//     }
//   };

//   useEffect(() => {
//     !access && navigate('/');
//   }, [access]);

//   const onSearch = (id) => {
//     if (!existingCharacterIds.has(id)) {
//       axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
//         if (data.name) {
//           setCharacters((oldChars) => [...oldChars, data]);
//           setExistingCharacterIds((prevIds) => new Set([...prevIds, id])); // Agrega el ID al conjunto
//         } else {
//           window.alert('¡No hay personajes con este ID!');
//         }
//       });
//     } else {
//       window.alert('¡Este personaje ya se encuentra en pantalla!');
//     }
//   };

//   const onClose = (id) => {
//     const parsedId = parseInt(id, 10);
//     const filteredCharacters = characters.filter((character) => character.id !== parsedId);
//     setCharacters(filteredCharacters);
//     setExistingCharacterIds((prevIds) => {
//       const newIds = new Set(prevIds);
//       newIds.delete(id); // Elimina el ID del conjunto
//       return newIds;
//     });
//   };

//   return (
//     <div className="App">
//       {location.pathname !== '/' && <Nav onSearch={onSearch} />}
//       <Routes>
//         <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/favorites" element={<Favorites />} />
//         <Route path="/" element={<Form login={login} />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;



















// /* style*/ 
// import './App.css';

// /*Component to Render*/
// import Nav from './components/nav/Nav';
// import Form from './components/form/Form';
// import About from './components/about/About';
// import Detail from './components/details/Detail';
// import Cards from './components/cards/Cards.jsx';
// import Favorites from "./components/favorites/Favorites"

// /* hooks */
// import { useState ,  useEffect } from 'react';
// import { Routes, Route , useLocation , useNavigate } from "react-router-dom"

// /*dependecies */
// import axios from 'axios';

// /*credentials */
// const EMAIL =  "samuel.sgcs768@gmail.com"
// const PASSWORD = "Naruto123*"

// const App = () => {

//    const [ characters, setCharacters ] = useState([])
//    const [ access , setAccess ] = useState(false)
//    const location = useLocation();
//    const navigate = useNavigate();

  
//    const login = (userData) =>{
//       if (userData.password === PASSWORD && userData.email === EMAIL) {
//          setAccess(true);
//          navigate('/home');
//       }
//    }

//    useEffect(() => {
//       !access && navigate('/');
//    }, [access]);

   
//    const onSearch = (id) => {
//         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
//           if (data.name) {
//             setCharacters((oldChars) => [...oldChars, data]);
//           } else {
//             window.alert('¡No hay personajes con este ID!');
//           }
//         });
//    }
    
    
//     const  onClose = (id)=>{
//       const parsedId = parseInt(id, 10); //convierte la cadena en un numero
//       const filteredcharacters = characters.filter((character) => character.id !== parsedId);
//       setCharacters(filteredcharacters) //actualiza los caracteres y quita el caracter que no quiere
//    }
   
//    return (
//     <div className='App'>
//          {location.pathname !== '/' && <Nav onSearch={onSearch} /> /*El pathname permite saber en que localidad se encuentra la pagina*/} 
//          <Routes>
//             <Route path='/home' element={<Cards characters={characters} onClose={onClose} /*Ya no recuerdo como funcionaba esto*/ />} />
//             <Route path='/about' element={<About/>}/>
//             <Route path='/favorites' element={<Favorites/>}/>
//             <Route path='/detail/:id' element={<Detail />} />
//             <Route path='/' element = {<Form login={login}/>}/>
//          </Routes>
         
//       </div>
//   )
// }

// export default App







// const onSearch = (id) => {
//    // Comprueba si el personaje con el mismo ID ya está en la lista
//    if (!characters.some((character) => character.id === id)) {

   //      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      //        if (data.name) {
         //          setCharacters((oldChars) => [...oldChars, data]);
//        } else {
//          window.alert('¡No hay personajes con este ID!');
//        }
//      });
//    } else {
//      window.alert('¡Este personaje ya está en tu lista!');
//    }
//  };













// const  onSearch = (id)=> {
   
   //       if(!characters.some( character => character.id === id)) {
      
      //          axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         //             if (data.name) {
            //                setCharacters((oldChars) => [...oldChars, data]);
            //             } else {
               //                window.alert('¡No hay personajes con este ID!');
               //             }
               //          });
               //       }
   
// }