import React, { use } from 'react'
import Property from './Property';
import { Link } from 'react-router';

const LatestProperties = ({LatestPropertiesPromise}) => {
    const properties = use(LatestPropertiesPromise);
    console.log(properties);
  return (
    <div className='mx-auto mt-10'>
        <div className='flex justify-between items-center mb-2 px-3'>
          <h1 className='text-3xl font-semibold text-blue-700'>Latest Properties</h1>
          <Link to="/all-property" className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent font-semibold text-lg'>View All</Link>
        </div>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 '>
            {
          properties.map( property => <Property key={property.id}
            property = {property}
          ></Property>)
        }
        </div>
    </div>
  )
}

export default LatestProperties