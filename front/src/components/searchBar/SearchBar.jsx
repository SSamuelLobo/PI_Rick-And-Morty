import { useState } from "react";


const SearchBar = ({ onSearch }) =>{

  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    onSearch(id);
    setId(""); // Limpia el valor de la barra de búsqueda después de realizar la búsqueda
  };

  const handleRandomCharacter = () => {
   const random = Math.floor(Math.random() * 826) + 1;
   onSearch(random);
 };

  return (
    <div>
      <input type="search" value={id} onChange={handleChange} />
      <button onClick={handleSearch}>Agregar</button>
      <button onClick={handleRandomCharacter}>Random Character</button>
    </div>
  );
}


export default  SearchBar;