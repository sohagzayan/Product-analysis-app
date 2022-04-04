import React from 'react';
import heroImage from '../../asset/images/final baner.png';
const HeroSection = () => {
    return (
        <div className='flex flex-col-reverse  md:flex-row items-center justify-between container mx-auto mt-10'>
           <div className='w-4/6 md:text-left text-center'>
                <h2 className=' text-4xl sm:text-5xl md:text-5xl lg:text-7xl uppercase text-primary_black font-bold   mb-7 tracking-normal leading-loose'>The delight <br /> jumbo <span className='text-orange_light'>burger</span></h2>
                <p className='text-md  text-primary_black leading-snug mb-7'>
                     It's very delicious burger which I ever make for my kiddos with lots  of vegetables, mayonnaise, Cheese slice ,green chutney, red tomato ketchup,  some pepper and salt and that's yummy burger is ready. Here I make burger  bun at home so this is very healthy
                </p>
                <button className='bg-green_light text-white px-5 py-2 rounded-md text-xl uppercase font-semibold tracking-wider'>Live demo</button>
           </div>
           <div className='w-3/6 md:mb-0 mb-4'>
               <img className='' src={heroImage} alt="" />
           </div>
        </div>
    );
};

export default HeroSection;