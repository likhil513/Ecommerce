import React from 'react'
import {Link} from 'react-router-dom'
import Search from '../Search'

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t border-b border-gray-300">
        <div className="container">
          <div className='flex justify-between items-center'>
             <div className="col1 w-[50%]">
                <p className='text-[16px] text-brand-gray'>Get up to 50% off new season styles,limited time</p>
             </div>
             <div className='col2 w-[50%] text-right flex justify-end gap-6'>
                <Link to='/help-center' className='text-[16px] text-brand-dark hover:text-brand-blue transistion'>Help Center</Link>
                <Link to='/order-tracking' className='text-[16px] text-brand-dark hover:text-brand-blue'>Order tracking</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header p-[1rem]">
        <div className="container flex justify-between items-center">
          <div className="col1 w-[20%]">
            <Link to={'/'}><img src="/logo1.png" alt="Logo" width={'190px'}/></Link>
          </div>
          <div className="col2 w-[40%]">
            <Search />
          </div>
          <div className="col3 w-[30%]"></div>
        </div>
      </div>
    </header>
  )
}

export default Header