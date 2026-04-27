import React from 'react'
import { FaHome } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaMessage, FaXTwitter } from 'react-icons/fa6'
import { MdAddCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='bg-black pb-5'>
        <footer className="footer text-white sm:footer-horizontal p-10 bg-black mt-10">
  <aside>
    <div className='flex justify-center items-center gap-2'>
          <span><FaHome style={{ color: "blue", fontSize: "30px" }} /></span>
          <a className="text-3xl  font-extrabold text-white flex justify-center items-center"> Home<span className=' bg-linear-to-r from-[#b90303] to-[#2506ea] bg-clip-text text-transparent'>Nest</span></a>
        </div>
    <p>
      Your trusted marketplace for RealState Companies<br /> Discover the best deals from across Bangladesh.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">All Properties</a>
    <a className="link link-hover">Dashboard</a>
    <a className="link link-hover">Login</a>
    <a className="link link-hover">Registrations</a>
  </nav>
  <nav>
    <h6 className="footer-title">Categories</h6>
    <a className="link link-hover">Land</a>
    <a className="link link-hover">Rent</a>
    <a className="link link-hover">Sale</a>
    <a className="link link-hover">Commercial</a>
  </nav>
  <nav>
    <h6 className="footer-title"> Contact & Support</h6>
    <div className='flex justify-center items-center '>
      <p className='mt-1'><MdOutlineMail /></p>
      <a className="link link-hover ml-1">support@homenest.com</a>
      </div>
      <div className='flex justify-center items-center '>
      <p className='mt-1'><MdAddCall /></p>
      <a className="link link-hover ml-1">01628112691</a>
      </div>
      <div className='flex justify-center items-center '>
      <p className='mt-1'><FaLocationDot /></p>
      <a className="link link-hover ml-1">123 Commerce Street, Dhaka, Bangladesh</a>
      </div>
  </nav>
  <nav>
     <h6 className="footer-title">Social Links</h6>
    <div className="flex justify-center">
        <a className='mr-2'><FaFacebook></FaFacebook> </a>
        <a className='mr-2'><FaLinkedin></FaLinkedin> </a>
        <a className='mr-2'><FaInstagram></FaInstagram> </a>
        <a className='mr-2'> <FaXTwitter /></a>
    </div>
    
  </nav>
  
</footer>
<div className='mb-2'>
   <h1 className='text-center font-semibold text-gray-300 text-sm bg-black'>@ 2026 HomeNest. All right reserved</h1>
</div>
    </div>
  )
}

export default Footer