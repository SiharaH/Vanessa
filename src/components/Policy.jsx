import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div className='bg-gray-100 p-5 rounded-lg'>
        <img src={assets.exchange} className='w-12 m-auto mb-5' alt="" />
        <p className='font-bold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>Hasle free exchange process</p>
      </div>

      <div className='bg-gray-100 p-5 rounded-lg'>
        <img src={assets.returnIcon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-bold'>7 Days Return Policy</p>
        <p className='text-gray-400'>Got a week to change your mind</p>
      </div>

      <div className='bg-gray-100 p-5 rounded-lg'>
        <img src={assets.customerService} className='w-12 m-auto mb-5' alt="" />
        <p className='font-bold'>24/7 Customer Support</p>
        <p className='text-gray-400'>Support, anytime, anyday, anywhere</p>
      </div>

      <div className='bg-gray-100 p-5 rounded-lg'>
        <img src={assets.delivery} className='w-12 m-auto mb-5' alt="" />
        <p className='font-bold'>Fast Delivery</p>
        <p className='text-gray-400'>5 days, and it's all yours</p>
      </div>
    </div>
  )
}

export default Policy
