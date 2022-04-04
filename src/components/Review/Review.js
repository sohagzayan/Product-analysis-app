import React from 'react';
import useReviewData from '../../hocks/useReviewData';
import ReviewCard from '../ReviewCard/ReviewCard';




const Review = () => {

    const [reviewData , setReviewData] = useReviewData()

    console.log(reviewData);

    return (
        <div className=' container px-2 mx-auto mt-24 w-full'>
           <h3 className='text-center text-4xl font-medium text-primary_black'>Customer Reviews (3)</h3>
           <div>
               <div className="card grid grid-cols-3 w-full gap-2">
                    {
                         reviewData.map(reviewDetails => <ReviewCard
                            reviewDetails={reviewDetails}
                            />)
                    }
               </div>
           </div>
           <button className='text-center bg-green_light text-white px-3 py-1 font-semibold tracking-wider rounded-md cursor-pointer'>See All Reviews</button>
        </div>
    );
};

export default Review;