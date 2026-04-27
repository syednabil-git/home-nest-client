import React from 'react'
import { Link } from 'react-router';

const Property = ({property}) => {
 
    const { propertyName, image, propertyPrice, location, category, _id } = property;
  return (
    <div className='mx-auto'>
       <div className='card-items 0 p-2 ml-1 mx-auto max-w-[1250px] items-center'>
         <div className=' grid grid-cols-3 gap-2'>
          <div className="card bg-base-100 w-[300px] shadow-sm">
         <figure className="px-5 pt-5">
         <img
           src={image}
            alt=""
           className="rounded-xl w-full h-60" />
           <span className="absolute top-8 left-6 bg-blue-500 text-white text-sm px-3 py-1 rounded-lg font-semibold">
            {category}
            </span>
         </figure>
       <div className=' text-start'>
       <div className="card-body">
       <h2 className="card-title text-xl">{propertyName} </h2>
       <p className='text-gray-600 font-semibold'>{location}</p>
       <p className='text-blue-700 font-semibold text-lg'>Price: ${propertyPrice}</p>
      <div className="w-full">
           <Link to={`/propertiesDetails/${property._id}`} className=" p-[1.5px] rounded-sm bg-gradient-to-r from-[#0e03ef] to-[#02baed] inline-block w-full"><button className='px-5 py-[6px] rounded-sm bg-white font-semibold hover:bg-gray-100 transition w-full'><span className=' bg-linear-to-r from-[#e32e49] to-[#9F62F2] bg-clip-text text-transparent'>View Details</span></button></Link> 
       </div>
       
      </div>
    </div>
          </div>
      
        </div>

    
      </div>
      </div>
  )
}

export default Property