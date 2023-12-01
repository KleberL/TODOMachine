import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }){
    return(
      <input 
        placeholder="Cortar cebolla"
        className="TodoSearch"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
      />
    );
  }

export {TodoSearch};