import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible,setVisible] = useState(false);
    const {setshowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'><img src={assets.logo} alt="Logo" className='w-36' /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-pink-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-pink-700 hidden' />
            </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-pink-700 hidden' />
            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-pink-700 hidden' />
            </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-pink-700 hidden' />
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img src={assets.search} className='w-5 cursor-pointer' alt="search" />

            <div className='group relative'>
                <img src={assets.login} alt="User-Account" className='w-5 cursor-pointer' />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-pink-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Log Out</p>
                    </div>
                </div>
            </div>
            <Link to="/cart" className='relative'>
                <img src={assets.cart} alt="" className='w-5 m-w-5' />
                <p className='absolute right-[-5px] bottom-[-5px] w-3 text-center leading-3 bg-black text-white aspect-square rounded-full text-[6px]'>{getCartCount()}</p>
            
            </Link>

            <img onClick={()=>setVisible(true)} src={assets.menu} className='w-5 cursor-pointer sm:hidden' />
        </div>
        <div className={`absolute top-10 right-5 bottom-40 left-40 overflow-hidden bg-white ${visible ? "w-full" : "w-0"}`}>
            <div className='flex flex-col text-black'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-6 cursor-pointer'>
                    <img className='h-4 rotate-180' src={assets.back} />
                </div>
                <NavLink to='/' className='py-2 pl-6 cursor-pointer hover:bg-pink-200' onClick={()=>setVisible(false)}>
                    <p>Home</p>
                </NavLink>
                <NavLink to='/collection' className='py-2 pl-6 cursor-pointer hover:bg-pink-200' onClick={()=>setVisible(false)}>
                    <p>Collection</p>
                </NavLink>
                <NavLink to='/about' className='py-2 pl-6 cursor-pointer hover:bg-pink-200' onClick={()=>setVisible(false)}>
                    <p>About</p>
                </NavLink>
                <NavLink to='/contact' className='py-2 pl-6 cursor-pointer hover:bg-pink-200' onClick={()=>setVisible(false)}>
                    <p>Contact</p>
                </NavLink>

            </div>

        </div>

      
    </div>
  )
}

export default Navbar
