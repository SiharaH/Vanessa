import React from 'react'
import {assets} from '../assets/assets'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
      <img className='w-40' src={assets.logo} alt="logo" />
      <button className='bg-gray-500 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default NavBar
