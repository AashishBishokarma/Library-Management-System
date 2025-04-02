import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gray-800 text-white p-4'>
      <div className='text-2xl'>LMS</div>
      <div>
        <input type="text" 
          className='bg-black text-white-800 p-2 m-2 rounded border border-white'  
          placeholder='Search Books...'
        />
        <button 
          className='bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300'
          >Search
        </button>
      </div>
    </div>
  )
}

export default Navbar