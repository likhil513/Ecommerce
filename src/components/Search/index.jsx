import React from 'react'
import './style.css'

const Search = () => {
  return (
    <div className='searchBar bg-brand-pale w-[100%] h-[50px] rounded-[5px] p-2 border hover:border-brand-sky transition duration-300 ease-in-out flex items-center justify-between'>
        <input type="text" placeholder='Search for products...' className='bg-inherit w-[100%] h-[35px] rounded-[5px] focus:outline-none text-[16px] p-2' />
    </div>
  )
}

export default Search