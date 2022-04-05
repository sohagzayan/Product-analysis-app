import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='flex  item-center justify-center flex-col h-screen text-center'>
            <h2 className='text-orange_light text-2xl font-bold'>This is page Not exit</h2>
            <h4>Please write a write url </h4>
            <button onClick={()=> navigate("/")} className='bg-green_light text-white w-24  mx-auto px-3 py-1 rounded-md mt-3 cursor-pointer font-semibold'>Go Home</button>
        </div>
    );
};

export default NotFound;