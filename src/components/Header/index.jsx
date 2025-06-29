import React from 'react'
import {Link} from 'react-router-dom'
import Search from '../Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbGitCompare } from "react-icons/tb";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


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
          <div className="col3 w-[30%]">
            <div className='flex justify-end items-center gap-6'>
              <div>
                <Button component={Link} to="/login" className='!bg-brand-light !text-brand-dark !p-2 hover:!bg-brand-sky !font-medium'>Login</Button>
                <Button component={Link} to="/register" className='!bg-brand-light !text-brand-dark !ml-2 !p-2  hover:!bg-brand-sky'>Register</Button>
              </div>
              <ul className='flex gap-3 list-style-none'>
                <li>
                  <Tooltip title="Compare">
                    <IconButton aria-label="compare">
                      <StyledBadge badgeContent={4} color="secondary">
                        <TbGitCompare />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Favorites">
                    <IconButton aria-label="favorites">
                      <StyledBadge badgeContent={4} color="secondary">
                        <FaRegHeart />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Cart">
                    <IconButton aria-label="Cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <MdOutlineShoppingCart />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header