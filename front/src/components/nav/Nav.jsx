import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import Button from '../button/Button';

const Nav = ({onSearch}) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch}/>
      <Button link="/home" text="Home" />
      <Button link="/about" text="About me" />
      <Button link="/favorites" text="Favorites" />
    </nav>
  );
}


export default Nav ;