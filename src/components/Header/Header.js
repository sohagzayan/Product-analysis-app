import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
const Header = () => {


    const [showMenu , setShowMenu] = useState(false)

    const handleShowHide  = ()=>{
        setShowMenu(!showMenu)
    }


    return (
        <div className='flex relative   md:bg-transparent item-center justify-center w-full'>
             <h5 className='absolute z-50 text-4xl block md:hidden left-5 top-3'>
                <FiMenu onClick={handleShowHide} className='' />
             </h5>   
            <ul className={showMenu ? 'navberDesign transform sm:translate-y-0 md:translate-y-0' : 'navberDesign  sm:-translate-y-60 md:translate-y-0 h-28' }>
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