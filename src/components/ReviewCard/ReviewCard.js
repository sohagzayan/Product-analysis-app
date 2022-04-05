import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const ReviewCard = ({ reviewDetails }) => {
  const { detail, feedBackSms, picture, price, rating, username } =
    reviewDetails;
    const [h , setH] = useState(true)
  // const iconsArray = [{full : <AiFillStar /> , outline : <AiOutlineStar /> ,half : <BsStarHalf /> }]
  let j = rating  
//   console.log(j === '4.50/5.00');
  return (
    <div className=" rounded-md bg-white shadow-lg p-3">
      <div className="flex ">
        <div className="w-10 mr-7 ">
          <img className="rounded-full" src={picture} alt="image" />
        </div>
        <div>
          <div>
            
            {
               rating === '4.50/5.00' ?
                <div className="flex ">
                <AiFillStar  className="text-orange_light"/>
                <AiFillStar  className="text-orange_light"/>
                <AiFillStar  className="text-orange_light"/>
                <AiFillStar  className="text-orange_light"/>
                <BsStarHalf  className="text-orange_light"/>
                {/* <AiOutlineStar /> */}
                </div>
               : rating === '4.00/5.00' ?
                 <div className="flex">
                <AiFillStar  className="text-orange_light"/>
                <AiFillStar  className="text-orange_light"/>
                <AiFillStar  className="text-orange_light"/>
                <AiFillStar  className="text-orange_light"/>
                <AiOutlineStar className="text-orange_light"/>
              </div>
              : <div className="flex">
              <AiFillStar  className="text-orange_light"/>
              <AiFillStar  className="text-orange_light"/>
              <AiFillStar  className="text-orange_light"/>
              <AiFillStar  className="text-orange_light"/>
              <AiFillStar  className="text-orange_light"/>
            </div>
            }
            
          </div>
          <h4 className="text-green_light font-bold">{rating}</h4>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-primary_black  ">
          <span className="text-md text-slate-800 font-medium">{username}</span>{" "}
          <span className="text-slate-600">reviewed</span>
          <a className="text-blue-500 font-bold text-xl " href="/">
            Fanc
          </a>{" "}
          <br />
          <span className="font-bold text-xl mb-6 block">"{feedBackSms}"</span>
        </h4>
        <p className="text-sm text-gray-700">{detail}</p>
      </div>
      <div className="flex justify-between mt-8 text-primary_black">
        <h4>Published {new Date().toLocaleDateString()}</h4>
        <button className="bg-green_light px-3 py-1 text-white rounded-md cursor-pointer ">
          Read review
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
