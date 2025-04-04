import React  , {useContext} from 'react'
import { SearchContext } from '../context/SearchContext'

const Navbar = () => {
  const {search , setSearch} = useContext(SearchContext);

  return (
    <div className='flex justify-between items-center bg-gray-800 text-white p-4'>
      <div className='text-2xl'>Library Inventory</div>
      <div>
        <input type="text" 
          onChange={(e) => setSearch(e.target.value)}
          className='bg-black text-white-800 p-2 m-2 rounded border border-white'  
          placeholder='Search Books...'
        />
        {/* <button 
          className='bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300'
          >Search
        </button> */}
      </div>
    </div>
  )
}

export default Navbar