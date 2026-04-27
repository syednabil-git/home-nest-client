import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const RootLayout = () => {
  return (
    <div className='max-w-7xl mx-auto px-2 md:px-1 bg-gray-50'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        
    </div>
  )
}

export default RootLayout