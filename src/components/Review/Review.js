import React from "react";
import { useNavigate } from "react-router-dom";
import useReviewData from "../../hocks/useReviewData";
import ReviewCard from "../ReviewCard/ReviewCard";
import ReviewFrame from "../ReviewFrame/ReviewFrame";

const Review = () => {
  const [reviewData, setReviewData] = useReviewData();
  const maxShowThreeProduct = reviewData.slice(0, 3);
  const navigate = useNavigate()
  return (
    <>
      <h3 className="text-center mt-20 text-4xl font-medium text-primary_black">
        Customer Reviews (3)
      </h3>

      <ReviewFrame reviewData={maxShowThreeProduct} ReviewCard={ReviewCard} />
      <div className="text-center mt-8">
        <button onClick={()=> navigate('/reviews')} className="text-center my-4 bg-green_light text-white px-3 py-1 font-semibold tracking-wider rounded-md cursor-pointer">
          See All Reviews
        </button>
      </div>
    </>
  );
};

export default Review;
