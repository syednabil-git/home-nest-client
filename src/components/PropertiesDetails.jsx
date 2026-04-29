import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import { AuthContext } from '../contexts/AuthContex';
import Swal from 'sweetalert2';
import axios from 'axios';

const PropertiesDetails = () => {
  const product = useLoaderData();
  const productId = product?._id?.toString();
  const ratingModalRef = useRef(null);
  const [ratings, setRatings] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
  if (!productId) return;

  axios
    .get(`https://home-nest-server.onrender.com/products/rating/${productId}`)
    .then(res => {
      console.log('ratings:', res.data);
      setRatings(res.data);
    })
    .catch(err => console.log(err));

    }, [productId]);


  const avgRating = ratings.length > 0
      ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length : 0;

  // submit
  const handleRatingSubmit = (e) => {
    e.preventDefault();

    if (selectedRating === 0) {
      alert("Please select rating");
      return;
    }
    const name = e.target.name.value;
    const email = e.target.email.value;
    const posted_date = e.target.posted_date.value;
    const shortDescription = e.target.shortDescription.value;
  

    const newRating = {
      product: productId,
      propertyName:product.propertyName,
      image: product.image,
      user_name: name,
      email,
      seller_image: product.seller_image,
      user_photo: user?.photoURL,
      propertyPrice:product.propertyPrice,
      rating: selectedRating,
      shortDescription,
      posted_date,
      category: product.category,
    };

    fetch('https://home-nest-server.onrender.com/rating', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newRating),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {

    ratingModalRef.current.close();
    setSelectedRating(0);

    const ratingWithId = {
      ...newRating,
      _id: data.insertedId
    };

    setRatings(prev => {
      const updated = [...prev, ratingWithId];

      // optional sorting
      updated.sort((a, b) => b.rating - a.rating);

      return updated;
    });

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
            return <span key={star} className="text-yellow-400 text-2xl">★</span>;
          } else if (value >= star - 0.5) {
            return <span key={star} className="text-yellow-400 text-2xl">⯨</span>;
          } else {
            return <span key={star} className="text-gray-300 text-2xl">☆</span>;
          }
        })}
      </div>
    );
  };

  return (
   <div className="bg-gray-100 max-w-7xl mx-auto p-4 md:p-10">
    {/* properties details section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* ================= LEFT SIDE ================= */}
    <div className="space-y-4">

      <figure className="px-5 pt-5">
         <img
           src={product?.image}
            alt=""
           className="rounded-xl w-full h-[300px] object-cover" />
           <span className="absolute top-23 md:top-30 left-7 md:left-95 bg-blue-500 text-white text-sm px-3 py-1 rounded-lg font-semibold">
            {product.category}
            </span>
         </figure>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-bold text-xl">Product Description</h3>


        <div className="my-3 border-t"></div>

        <p className="text-gray-600">{product.shortDescription}</p>
      </div>

    </div>

    {/* ================= RIGHT SIDE ================= */}
    <div className="space-y-4">

      <NavLink
        to="/"
        className="text-sm font-semibold text-purple-600 flex items-center gap-1"
      >
        ← Back to Products
      </NavLink>

      <h1 className="text-2xl md:text-3xl font-bold">
        {product.propertyName}
      </h1>

      {/* Price */}
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-green-500 font-bold text-lg">
          ${product?.propertyPrice}
        </p>
        <p className="text-sm text-gray-500">Price</p>
      </div>

      {/* Product Info */}
      <div className="bg-white p-4 rounded-xl shadow text-sm space-y-1">
        <p><b>Product ID:</b> {product._id}</p>
        <p><b>Posted Date:</b> {product.posted_date}</p>
      </div>

      {/* Seller Info */}
      <div className="bg-white p-4 rounded-xl shadow">

        <h2 className="font-bold mb-3">Seller Information</h2>

        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={product?.seller_image}
            alt="seller"
          />

          <div>
            <p className="font-semibold">{product.user_name}</p>
            <p className="text-sm text-gray-500">{product.email}</p>
          </div>
        </div>

        <div className="mt-3 space-y-1 text-sm">
          <p><b>Location:</b> {product.location}</p>
          <p><b>Contact:</b> {product.seller_contact}</p>
        </div>

      </div>


    </div>
  </div>



    {/* MyRatings section */}
      <div className="max-w-3xl mx-auto p-4">
        
        <h1 className='text-3xl font-bold text-center mt-10'>Rating & Review</h1>
        <progress className="progress w-full text-blue-500"></progress>
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
          onClick={() => ratingModalRef.current?.showModal()}
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
            className=" rounded-xl p-4 shadow-lg"
          >
            <div className="flex justify-start gap-20">
              <div className='flex justify-center gap-2'>
                <img
                 src={item.user_photo}
                  alt="user"
                 className="w-10 h-10 rounded-full object-cover"
                  />
                <div>
                 <h3 className="font-semibold">{item.user_name}</h3>
                 <p className="text-xs text-gray-400">{item.posted_date}</p>
                </div>
              </div>

              {renderStars(item.rating)}
            </div>

            <p className="mt-2 text-gray-700 ml-12 font-semibold">
              {item.shortDescription}
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

            <textarea name="shortDescription" className="textarea w-full" placeholder="Write review" required />

            <input type="date" name="posted_date" defaultValue={new Date().toISOString().split("T")[0]} className="input w-full" />

            {/* ⭐ STAR INPUT */}
            <div className="flex gap-1 text-6xl">
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