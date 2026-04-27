import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import errorImg from "../assets/error.jpg"

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50">

      {/* Animated 404 */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-8xl font-bold text-red-500"
      >
        404
      </motion.h1>

      {/* Animated text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl mt-4 font-semibold"
      >
        Oops! Page Not Found
      </motion.p>

      {/* Illustration */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        src={errorImg}
        alt="404"
        className="w-100 mt-6"
      />

      {/* Search bar */}
      <div className="mt-6 flex">
        <input
          type="text"
          placeholder="Search properties..."
          className="border px-4 py-2 rounded-l-md w-64 outline-none"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
          🔍 Search
        </button>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
        >
          ⬅ Back
        </button>

        {/* Home button */}
        <Link
          to="/"
          className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Go Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;