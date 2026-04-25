import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const RootLayout = () => {
  return (
    <div className='mx-auto max-w-[1250px]'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        
    </div>
  )
}

export default RootLayout