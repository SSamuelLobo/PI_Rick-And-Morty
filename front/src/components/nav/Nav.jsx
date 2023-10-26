import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import Button from '../button/Button';
import "./nav.css"

/*Iconos */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" ;
import {faHouse , faUser , faStar , faRightFromBracket} from "@fortawesome/free-solid-svg-icons"

const Nav = ( { onSearch , logout , deleteAllCharacters } ) => {

  const handleLogout = (event) =>{
    event.preventDefault()
    logout()
  }

  

  return (
    <nav className="container">
      <div className="container__nav-div-button">
        <FontAwesomeIcon icon={faHouse} className="icon"/>
        <Button className="container__nav-button-home" link="/home" text="Home" />
        <FontAwesomeIcon icon={faUser} className="icon" />
        <Button className="container__nav-button-about" link="/about" text="About me" />
        <FontAwesomeIcon icon={faStar} className="icon" />
        <Button className="container__nav-button-favorites" link="/favorites" text="Favorites" />
      </div>
      <div className="container__nav-searchBar">
        <SearchBar onSearch={onSearch} deleteAllCharacters={deleteAllCharacters}/>
      </div>
      <div className="container__nav-div-button-Logout">
        <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
        <a  onClick={handleLogout}>Log Out</a>
      </div>
    </nav>
  );
}


export default Nav ;