import React from 'react';

const ReviewFrame = ({reviewData , ReviewCard}) => {
    return (
        <div className='  px-3 mx-auto mt-24 w-full'>
           <div>
               <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-2 mt-10">
                    {
                        reviewData.map(reviewDetails => <ReviewCard
                        key={reviewDetails.id}
                            reviewDetails={reviewDetails}
                            />)
                    }
               </div>
           </div>
                    
        </div>
    );
};

export default ReviewFrame;