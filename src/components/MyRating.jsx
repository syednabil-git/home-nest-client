import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContex'
import { useLoaderData } from 'react-router';

const MyRating = () => {

  const { user } = use (AuthContext);
  const [ratings, setRatings] = useState([])
  

  useEffect(() => {
    if(user?.email) {
      fetch(`http://localhost:3000/rating?email=${user.email}`,{
        headers:{
          authorization: `Bearer ${user.accessToken}`
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setRatings(data)
      })
    }
  }, [user])

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
            className="border rounded-xl p-4 shadow-sm"
          >
            <div className="flex justify-between">
              <div className='flex justify-center gap-2'>
                <img
                 src={item.user_photo}
                  alt="user"
                 className="w-10 h-10 rounded-full object-cover"
                  />
                <div>
                 <h3 className="font-semibold">{item.user_name}</h3>
                 <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>

              {renderStars(item.rating)}
            </div>

            <p className="mt-2 text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyRating