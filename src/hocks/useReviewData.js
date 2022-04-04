import { useEffect, useState } from 'react';

const useReviewData = () => {

    const [reviewData , setReviewData] = useState([])


    useEffect(()=>{    
    fetch(`Data.json`)
    .then(res => res.json())
    .then(data => setReviewData(data))
    },[])

    return [reviewData ,setReviewData]
};

export default useReviewData;