import React from 'react'
import LatestProperties from './LatestProperties';
import cover from "../assets/cover.png";
import { FaSearch, FaSearchLocation } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';
import { LiaHandHoldingHeartSolid } from 'react-icons/lia';
import { CiTimer } from 'react-icons/ci';


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

                    {/* Why Choose Us */}
    <div className=''>
      <h1 className='text-3xl font-bold mt-10 mb-5 text-center'>Why Choose Us</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-2 items-center justify-between px-20'>
        <div className='text-center bg-blue-100 shadow-sm rounded-xl p-5 px-10'>
          <span className='flex items-center justify-center mb-3'><MdVerifiedUser style={{ color: "blue", fontSize: "50px" }} /></span>
          <p className='font-semibold text-xl'>Verified Properties</p>
          <p className='text-lg text-gray-600'>All Properties are <br></br>verified for your safety.</p>
        </div>
       <div className='text-center  bg-blue-100 shadow-sm rounded-xl p-5 px-10'>
          <span className='flex items-center justify-center mb-3'><LiaHandHoldingHeartSolid style={{ color: "green", fontSize: "50px" }} /></span>
          <p className='font-semibold text-xl'>Trusted Thousands</p>
          <p className='text-lg text-gray-600'>Thousands of happy<br></br>customers trusted us.</p>
        </div>
        <div className='text-center  bg-blue-100 shadow-sm rounded-xl p-5 px-10'>
          <span className='flex items-center justify-center mb-3'><FaSearchLocation style={{ color: "blue", fontSize: "50px" }} /></span>
          <p className='font-semibold text-xl'>Easy & Fast Search</p>
          <p className='text-lg text-gray-600'>Find your dream home<br></br>in a few clicks.</p>
        </div>
        <div className='text-center  bg-blue-100 shadow-sm rounded-xl p-5 px-10'>
          <span className='flex items-center justify-center mb-3'><CiTimer style={{ color: "blue", fontSize: "50px" }} /></span>
          <p className='font-semibold text-xl'>24/7 Support</p>
          <p className='text-lg text-gray-600'>We are here to help<br></br>you anytime.</p>
        </div>
      </div>
    </div>
                     {/* Top Location */}
   <h1 className='text-3xl font-bold text-center mt-10'>Top Locations</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-2 px-20 mt-5'>
        
        <div className="h-50 w-full rounded-xl bg-cover bg-center relative"
                   style={{ backgroundImage: "url('https://i.ibb.co.com/VWJY5MBS/dhaka.avif')"}}
>
                   {/* overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

                        {/* text bottom-left */}
          <div className="absolute bottom-4 left-4 text-white z-10">
          <h2 className="text-xl md:text-2xl font-bold">Dhaka</h2>
           <p className="text-sm md:text-base">120+ Properties</p>
          </div>
         </div>
        <div className="h-50 w-full rounded-xl bg-cover bg-center relative"
                   style={{ backgroundImage: "url('https://i.ibb.co.com/dsnhH0g6/barisal.webp')"}}
>
                   {/* overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

                        {/* text bottom-left */}
          <div className="absolute bottom-4 left-4 text-white z-10">
          <h2 className="text-xl md:text-2xl font-bold">Barisal</h2>
           <p className="text-sm md:text-base">20+ Properties</p>
          </div>
         </div>
        <div className="h-50 w-full rounded-xl bg-cover bg-center relative"
                   style={{ backgroundImage: "url('https://i.ibb.co.com/5hrbCbJT/chittagang.jpg')"}}
>
                   {/* overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

                        {/* text bottom-left */}
          <div className="absolute bottom-4 left-4 text-white z-10">
          <h2 className="text-xl md:text-2xl font-bold">Chittagram</h2>
           <p className="text-sm md:text-base">50+ Properties</p>
          </div>
         </div>
         <div className="h-50 w-full rounded-xl bg-cover bg-center relative"
                   style={{ backgroundImage: "url('https://i.ibb.co.com/5gThbyZ6/sylhet.webp')"}}
>
                   {/* overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

                        {/* text bottom-left */}
          <div className="absolute bottom-4 left-4 text-white z-10">
          <h2 className="text-xl md:text-2xl font-bold">Sylhet</h2>
           <p className="text-sm md:text-base">20+ Properties</p>
          </div>
         </div>
      </div>
  </div>
  )
}

export default Home