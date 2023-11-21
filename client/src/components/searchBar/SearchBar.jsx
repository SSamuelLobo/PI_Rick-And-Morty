import { useState} from "react";
import "./searchBar.css"


const SearchBar = ({ onSearch , deleteAllCharacters }) =>{

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

 const handleDeleteAllCharacters = () =>{
  deleteAllCharacters()
}

  return (
    <div className="container-searchBar">
      <form className={`container-searchBar__form ${id ? 'input-filled' : ''}`}>
        <input  type="search" value={id} onChange={handleChange} id="id-character" autoComplete="off"/>
        <label className="container-searchBar__form__label" htmlFor="id-character">
          <span className="container-searchBar__form__label__span">Id-Character</span>
        </label>
      </form>
      <a className="container-searchBar__a-Agregar" onClick={handleSearch}>Add</a>
      <a className="container-searchBar__a-Random" onClick={handleRandomCharacter}>Random</a>
      <a className="container-searchBar__a-deleteAllCharacters" onClick={handleDeleteAllCharacters}>Delete AllCharacters</a>
    </div>
  );
}


export default  SearchBar;