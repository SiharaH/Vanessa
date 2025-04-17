import React, { useState } from 'react'

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center w-full bg-gray-50'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
            <form>
                <div className='mb-3 min-w-96'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                    <input className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='your@email.com' required />
                </div>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                    <input className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='********' required />
                </div>
                <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black ' type='submit'>Login</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
