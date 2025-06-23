import React from 'react'
import './style.css'
import Button from '@mui/material/Button';
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className='searchBar bg-brand-pale w-[90%] h-[45px] rounded-[5px] p-2 border hover:border-brand-sky transition duration-300 ease-in-out flex items-center justify-between'>
        <input type="text" placeholder='Search for products...' className='bg-inherit w-[100%] h-[35px] rounded-[5px] focus:outline-none text-[16px] p-2 text-gray-600' />
        <Button className='!rounded-full !w-[37px]'><IoMdSearch className='text-[22px]' /></Button>
    </div>
  )
}

export default Search