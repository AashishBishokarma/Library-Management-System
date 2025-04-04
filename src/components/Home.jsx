import React, {useContext} from 'react'
import { books } from '../assets/index.js'
import { useState } from 'react'
import { SearchContext } from '../context/SearchContext.jsx'

const Home = () => {
  const { search } = useContext(SearchContext);
  // const [search, setSearch] = useState('');
  return (
    <div className="bg-gray-900 text-white items-center justify-center">
      <div 
        className="flex items-center justify-center text-white p-4 font-bold text-2xl">
        <h1>Books Inventroy</h1>
      </div>

      <div className='w-3/4 mx-auto mt-4'>
        <div>
          {
            books
            .filter((item) => {
              return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
            })
              .map((items, index) => (
              <div className='flex flex-col border border-gray-700 p-4 mt-4 rounded' key={index}>
                <div >Book Name : {items.name}</div>
                <div >Book Status : {items.status}</div>
                {items.status !=="Available" && (
                  <div key={index}>Return Date : {items.returnDate}</div>
                )}   
              </div>
            ))
          }           
        </div>
      </div>
    </div>
  )
}

export default Home