import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex bg-white md:bg-transparent item-center justify-center w-full'>
            <ul className='  navMenu flex   md:flex-row flex-col  items-center justify-center uppercase p-4 font-semibold tracking-wider text-primary_black'>
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