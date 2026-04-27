import React from 'react'
import LatestProperties from './LatestProperties';
import cover from "../assets/cover.png";
import { FaSearch } from 'react-icons/fa';


const LatestPropertiesPromise = fetch('http://localhost:3000/latest-properties')
.then(res => res.json());
const Home = () => {
  return (
  <div className='mx-auto'>
    <div
      className="h-120 bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${cover})` }}
    >
    <div className="h-100 flex items-center justify-start bg-black/40">
    <div className='ml-30'>
       <h1 className="text-white text-5xl">Find Your <br></br> <b> Dream Home</b></h1>
       <p className='text-gray-100 mt-3'>Discover the perfect place to call home.<br></br> Explore the thousands of verified Properties</p>
    </div>
    </div>
    <div className="mt-[-100px] flex justify-center items-center rounded-l-full shadow-2xl m">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search For Properties, Category..."
              className="w-150 px-5 py-3 outline-none bg-white rounded-l-full"
            />
            <button className='btn h-12 rounded-r-full outline-none bg-linear-to-r from-[#e32e52] to-[#0b03b5] w-20 text-white text-xl'><FaSearch></FaSearch> </button>
      </div>  
    </div>
    <div className="flex items-center justify-center text-center overflow-hidden max-w-[1250px] mx-auto mr-4"> 
     <LatestProperties LatestPropertiesPromise={LatestPropertiesPromise}></LatestProperties>
    </div>
  </div>
  )
}

export default Home