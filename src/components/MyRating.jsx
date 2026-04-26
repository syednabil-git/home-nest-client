import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContex'
import { useLoaderData } from 'react-router';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyRating = () => {
  const { user } = use (AuthContext);
  const [ratings, setRatings] = useState([])
  const [product, setProduct] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect( () => {
    if(user?.email) {
      axiosSecure.get(`/rating?user_email=${user.email}`)
      .then(res => setRatings(res.data))
    }
       
  }, [user, axiosSecure])


  const renderStars = (value) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => {
          if (value >= star) {
            return <span key={star} className="text-yellow-400">★</span>;
          } else if (value >= star - 0.5) {
            return <span key={star} className="text-yellow-400">⯨</span>;
          } else {
            return <span key={star} className="text-gray-300">☆</span>;
          }
        })}
      </div>
    );
  };
  return (
    <div>
       <div className="space-y-4">
        {ratings.map((item) => (
          <div
            key={item._id}
            className="rounded-xl shadow-sm pr-10 py-5"
          >
            <div className="flex justify-between">
              <div className='flex justify-center '>
                <img
                 src={item.productInfo?.image || item.image}
                  alt="user"
                 className="w-50 h-25 rounded-lg object-cover  mr-3"
                  />
                <div>
                 <h3 className="font-semibold">{item.productInfo?.propertyName}</h3>
                 <div className="text-lg">{renderStars(item.rating)}</div>
                 <div className=" text-gray-700 text-lg font-semibold">
                   {item.description}
                 </div>
                </div>
              </div>

              <p className="text-xs text-gray-700 font-bold">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyRating;