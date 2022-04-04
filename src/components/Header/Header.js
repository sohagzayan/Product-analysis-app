import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [showMenu , setShowMenu] = useState(true)
    return (
        <div className='flex relative   md:bg-transparent item-center justify-center w-full'>
             <h5 className='absolute z-50 text-4xl block md:hidden left-5 top-3'>
                <FiMenu className='' />
             </h5>   
            <ul style={{transform: `translateY(${showMenu ? '0px' : '-250px'})`}} className=' bg-slate-200 md:bg-transparent shadow-md md:shadow-none w-full  navMenu flex   md:flex-row flex-col  items-center justify-center uppercase p-4 font-semibold tracking-wider text-primary_black'>
                <li className='mx-2 md:mb-0 mb-4'>
                    <NavLink className={({isActive})=> isActive ? "text-orange_light   navItem before:bg-orange_light" : 'navItem'} to="/">Home</NavLink>
                </li>
                <li className='mx-2 md:mb-0 mb-4'>
                    <NavLink className={({isActive})=> isActive ? "text-orange_light navItem before:bg-orange_light" : 'navItem'} to="/reviews">Reviews</NavLink>
                </li>
                <li className='mx-2 md:mb-0 mb-4'>
                    <NavLink className={({isActive})=> isActive ? "text-orange_light navItem before:bg-orange_light" : 'navItem'} to="/dashboard">Dashboard</NavLink> 
                </li>
                <li className='mx-4 md:mb-0 mb-4 '>
                    <NavLink className={({isActive})=> isActive ? "text-orange_light navItem before:bg-orange_light" : 'navItem'} to="/blog">Blog</NavLink>
                </li>
                <li className='mx-2 md:mb-0 mb-4'>
                    <NavLink className={({isActive})=> isActive ? "text-orange_light navItem before:bg-orange_light" : 'navItem'} to="/about">About</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;