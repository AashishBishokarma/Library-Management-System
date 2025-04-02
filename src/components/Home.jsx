import React from 'react'
import { books } from '../assets/index.js'
import { useState } from 'react'

const Home = () => {
  return (
    <div className="bg-gray-900 text-white h-full items-center justify-center">
      <div 
        className="flex justify-between items-center justify-center text-white p-4 font-bold text-2xl">
        <h1>Books Inventroy</h1>
      </div>

      <div className='w-3/4 mx-auto mt-4'>
        <div>
          {
            books.map((items, index) => (
              <div className='flex flex-col border border-gray-700 p-4 mt-4 rounded' key={index}>
                <div >Book Name : {items.name}</div>
                <div key={index}>Book Status : {items.status}</div>
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