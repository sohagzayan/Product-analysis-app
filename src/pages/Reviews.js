import React from 'react';
import ReviewCard from '../components/ReviewCard/ReviewCard';
import ReviewFrame from '../components/ReviewFrame/ReviewFrame';
import useReviewData from '../hocks/useReviewData';



const Reviews = () => {
    const [reviewData ,setReviewData] = useReviewData()
    return (
        <div>
            <h2 className='uppercase text-3xl text-center text-green_light font-bold tracking-wider'>What Our customers say ({reviewData.length})</h2>
            <div>
                <ReviewFrame reviewData={reviewData} ReviewCard={ReviewCard} />
            </div>
        </div>
    );
};

export default Reviews;