import React from 'react';
import ReviewCard from '../components/ReviewCard/ReviewCard';
import ReviewFrame from '../components/ReviewFrame/ReviewFrame';
import useReviewData from '../hocks/useReviewData';



const Reviews = () => {
    const [reviewData ,setReviewData] = useReviewData()
    return (
        <div>
            
            <div>
                <ReviewFrame reviewData={reviewData} ReviewCard={ReviewCard} />
            </div>
        </div>
    );
};

export default Reviews;