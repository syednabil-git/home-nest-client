import React, { use, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../contexts/AuthContex';
import Swal from 'sweetalert2';

const PropertiesDetails = () => {
  const { _id: product_id } = useLoaderData();
  const ratingModalRef = useRef(null);

  const [ratings, setRatings] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const { user } = use(AuthContext);
  

  // fetch ratings
  useEffect(() => {
    fetch(`http://localhost:3000/products/rating/${product_id}`)
      .then(res => res.json())
      .then(data => setRatings(data));
  }, [product_id]);

  // average rating
  const avgRating =
    ratings.length > 0
      ? (
          ratings.reduce((sum, r) => sum + r.rating, 0) /
          ratings.length
        ).toFixed(1)
      : 0;

  // submit
  const handleRatingSubmit = (e) => {
    e.preventDefault();

    if (selectedRating === 0) {
      alert("Please select rating");
      return;
    }

    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const description = e.target.description.value;

    const newRating = {
      product: product_id,
      user_name: name,
      user_email: email,
      user_photo: user?.photoURL,
      rating: selectedRating,
      description,
      date,
    };

    fetch('http://localhost:3000/rating', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newRating),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          ratingModalRef.current.close();
          setSelectedRating(0);

          // UI update instantly
          setRatings([...ratings, newRating]);

          Swal.fire({
            icon: "success",
            title: "Review Added",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      });
  };

  // ⭐ star display function
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
   <div className="bg-gray-100 max-w-7xl mx-auto p-4 md:p-10">
    
    
      <div className="max-w-3xl mx-auto p-4">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">{avgRating}</h1>
          {renderStars(avgRating)}
          <p className="text-sm text-gray-500">
            Based on {ratings.length} reviews
          </p>
        </div>

        <button
          onClick={() => ratingModalRef.current.showModal()}
          className="btn bg-blue-600 text-white"
        >
          Add Review
        </button>
      </div>

      {/* ===== REVIEW LIST ===== */}
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

      {/* ===== MODAL ===== */}
      <dialog ref={ratingModalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Review</h3>

          <form onSubmit={handleRatingSubmit} className="space-y-3">

            <div className="flex items-center gap-3 p-2 rounded-lg">
  
           <img
             src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
             alt="User"
             className="w-12 h-12 rounded-full object-cover "
           />

           <div className="flex flex-col">
             <input
               name="name"
               defaultValue={user?.displayName}
               readOnly
               className="text-sm font-semibold bg-transparent outline-none mb-1 border-none"
             />

             <input
               name="email"
               defaultValue={user?.email}
               readOnly
                className="text-xs text-gray-500 bg-transparent outline-none  border-none"
              />
            </div>

            </div>

            <textarea name="description" className="textarea w-full" placeholder="Write review" required />

            <input type="date" name="date" defaultValue={new Date().toISOString().split("T")[0]} className="input w-full" />

            {/* ⭐ STAR INPUT */}
            <div className="flex gap-1 text-3xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setSelectedRating(star)}
                  className={`cursor-pointer ${
                    star <= selectedRating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            <p>Selected: {selectedRating} ⭐</p>

            <button className="btn w-full bg-blue-600 text-white">
              Submit
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      </div>
   </div>
  
  );
};

export default PropertiesDetails;