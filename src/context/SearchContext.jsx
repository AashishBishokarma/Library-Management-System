import {createContext , useState} from 'react';
import React from 'react'

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search , setSearch] = useState('');

  return(
    <SearchContext.Provider value={{search , setSearch}}>
      {children}
    </SearchContext.Provider>
  )
}