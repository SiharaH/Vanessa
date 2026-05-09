import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className='bg-gradient-to-r from-pink-50 via-white to-pink-100 border-t border-pink-100'>

      {/* Main Footer */}
      <div className='max-w-7xl mx-auto px-6 lg:px-12 py-10'>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left'>

          {/* Brand Section */}
          <div className='flex flex-col items-center md:items-start'>
            <img
              src={assets.logo}
              alt='Vanessa Logo'
              className='w-32 mb-4'
            />

            <p className='text-gray-600 text-sm leading-6 max-w-xs'>
              Elegant fashion designed to inspire confidence, beauty, and individuality in every style.
            </p>

            {/* Social Icons */}
            <div className='flex items-center gap-3 mt-5'>
              <div className='bg-white p-2 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 cursor-pointer'>
                <img
                  src={assets.instaLogo}
                  alt='Instagram'
                  className='w-4'
                />
              </div>

              <div className='bg-white p-2 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 cursor-pointer'>
                <img
                  src={assets.fbLogo}
                  alt='Facebook'
                  className='w-4'
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col items-center'>
            <h2 className='text-gray-800 font-semibold text-base mb-4 tracking-wide'>
              QUICK LINKS
            </h2>

            <ul className='space-y-2 text-sm text-gray-600'>
              {[
                "Home",
                "FAQs",
                "About Us",
                "Services",
                "Privacy Policy",
                "Terms & Conditions"
              ].map((item, index) => (
                <li
                  key={index}
                  className='hover:text-pink-600 transition duration-300 cursor-pointer'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className='flex flex-col items-center md:items-end gap-5'>

            {/* Contact Card */}
            <div className='bg-white/30 backdrop-blur-sm rounded-2xl px-6 py-5 shadow-sm w-full max-w-sm'>
              
              <h2 className='text-gray-800 font-semibold text-base mb-4 tracking-wide text-center md:text-left'>
                CONTACT US
              </h2>

              <div className='space-y-3 text-sm text-gray-600'>
                
                <div className='flex items-center gap-3 hover:text-pink-600 transition cursor-pointer'>
                  <span className='text-lg'>📞</span>
                  <p>+94 77 123 4567</p>
                </div>

                <div className='flex items-center gap-3 hover:text-pink-600 transition cursor-pointer break-all'>
                  <span className='text-lg'>✉️</span>
                  <p>contact.vanessa@gmail.com</p>
                </div>

              </div>
            </div>

            {/* Newsletter */}
            <div className='rounded-lg px-5 py-4 w-full max-w-sm shadow-sm'>
              
              <h2 className='text-gray-800 font-semibold text-sm mb-2'>
                Join Our Newsletter
              </h2>

              <p className='text-xs text-gray-600 mb-4'>
                Get updates about new arrivals and exclusive offers.
              </p>

              <div className='flex items-center bg-white rounded-full overflow-hidden border border-pink-200'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-2 text-sm outline-none bg-transparent'
                />

                <button className='bg-pink-500 hover:bg-pink-600 text-white text-sm px-5 py-2 transition duration-300'>
                  Subscribe
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-pink-100 py-4'>
        <p className='text-center text-xs text-gray-500 tracking-wide px-4'>
          © {Year} VANESSA • All Rights Reserved • Created by Sihara Edirisinghe
        </p>
      </div>
    </footer>
  )
}

export default Footer