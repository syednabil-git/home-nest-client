import React, { use, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContex';
import Property from './Property';

const AllProperty = () => {
  
   const [products, setProducts] = useState([]);
   const { user } = use(AuthContext);
   useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => setProducts(res.data));
        
   }, []);
  return (
    <div className=''>
      <h1 className='font-bold text-3xl text-center text-blue-700 my-10'>All Products</h1>
      <div className='mx-auto'>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4'>
            {
            products.map(product => <Property 
            key={product._id} 
            property = {product}
            ></Property>)
            }
        </div>
      </div>
    </div>
  )
}

export default AllProperty;