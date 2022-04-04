import React from 'react';

const ReviewCard = ({reviewDetails}) => {

    const {detail ,feedBackSms ,picture ,price ,rating ,username} = reviewDetails
    
    return (
        <div className=' rounded-md bg-white shadow-lg p-3'>
            <div className='flex '>
                <div className='w-10 mr-7 '>
                    <img className='rounded-full' src={picture} alt="image" />
                </div>
                <div>
                    <div>
                        rating cions Here
                    </div>
                    <h4>{rating}</h4>
                </div>
            </div>

            <div className='mt-4'>
                <h4 className='text-primary_black  '>
                    {/* {`${username} reviewed ` <br /> <a href="/">Fnac</a> ${feedBackSms}} */}
                    <span className='text-md text-slate-800'>{username}</span> <span className='text-slate-400'>reviewed</span> <a className='text-blue-500 font-bold' href="/">Fanc</a>  <br />
                    <span className='font-bold text-xl mb-6 block'>"{feedBackSms}"</span>
                </h4>
                <p className='text-sm text-gray-700'>{detail}</p>
            </div>
            <div className='flex justify-between mt-8 text-primary_black'>
                <h4>Published {new Date().toLocaleDateString()}</h4>
                <button className='bg-green_light px-3 py-1 text-white rounded-md cursor-pointer '>Read review</button>
            </div>
        </div>
    );
};

export default ReviewCard;