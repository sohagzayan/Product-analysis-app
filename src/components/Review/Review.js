import React from 'react';
import useReviewData from '../../hocks/useReviewData';
import ReviewCard from '../ReviewCard/ReviewCard';




const Review = () => {

    const [reviewData , setReviewData] = useReviewData()

    

    return (
        <div className='  px-3 mx-auto mt-24 w-full'>
           <h3 className='text-center text-4xl font-medium text-primary_black'>Customer Reviews (3)</h3>
           <div>
               <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-2 mt-10">
                    {
                         reviewData.slice(0 ,3).map(reviewDetails => <ReviewCard
                            reviewDetails={reviewDetails}
                            />)
                    }
               </div>
           </div>
                    <div className='text-center mt-8'>
                    <button className='text-center  bg-green_light text-white px-3 py-1 font-semibold tracking-wider rounded-md cursor-pointer'>See All Reviews</button>

                    </div>
        </div>
    );
};

export default Review;