import React from 'react'
import { assets } from '../assets/assets'
import NewsLetter from './NewsLetter'

const Footer = () => {
    const Year = new Date().getFullYear();
  return (
    <footer className='bg-gray-50 py-10 mt-10'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-[2fr_1fr_2fr] gap-5 px-5 font-semibold'>
        {/* Logo and Description */}
        <div className='border-r-2 p-5'>
          <img src={assets.logo} className='m-5 w-32 ' alt='Company Logo' />
          <p className='text-gray-600 leading-relaxed pr-10'>
          Vanessa offers stylish, high-quality women's clothing that empowers and inspires confidence. Discover fashion made for you.
          </p> <br />
            <div className='flex items-center space-x-5'>
                <p>FOLLOW US ON</p>
                <img src={assets.instaLogo} className=' w-8 cursor-pointer' />
                <img src={assets.fbLogo} className=' w-8 cursor-pointer' />

                
            </div>
        </div>

        {/* Company Links */}
        <div className='border-r-2 pr-5'>
          <h2 className='text-lg font-semibold mb-5 text-black '>COMPANY</h2>
          <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'> 
            <li className='hover:text-pink-600'>Home</li>
            <li className='hover:text-pink-600'>FAQs</li>
            <li className='hover:text-pink-600'>About Us</li>
            <li className='hover:text-pink-600'>Our Services</li>
            <li className='hover:text-pink-600'>Privacy Policy</li>
            <li className='hover:text-pink-600'>Terms & Conditions</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
            <div>
            <NewsLetter />
            </div>
          <div className='ml-5'>
            <h2 className='text-lg mb-5 font-sm '>CONTACT US</h2>
            <ul className='flex flex-col gap-1 text-gray-600 text-sm'> 
                <li>Contact No: <text className='hover:text-pink-600 cursor-pointer'>+94 77 123 4567</text></li>
                <li >Email Address: <text className='hover:text-pink-600 cursor-pointer'>contact.vanessa@gmail.com </text></li>

            </ul>

        </div>

        </div>
        
      </div>
      <div className='mt-10'>
        <hr />
        <p className='text-center text-gray-500 text-xs pt-5'> &copy; {Year} VANESSA All rights reserved. Created by Sihara Edirisinghe</p>
      </div>
    </footer>
  )
}

export default Footer
