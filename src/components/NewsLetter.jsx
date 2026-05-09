import React from 'react'

const NewsLetter = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('subscribed')
    }
  return (
    <div>
        <div className='text-center p-5'>
            <h1 className='text-xl font-semibold'>Subscribe to our Newsletter ♥</h1>
            {/* <p className='text-gray-500 mt-2'>Get the latest news and updates from us</p> */}
            <form onSubmit={handleSubmit} className='w-full sm:w-1/2 mx-auto flex items-center my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none pl-3 text-xs' type="email" placeholder='Enter Your Email' required />
                <button type="submit" className='bg-black text-white text-xs px-2 py-1'>SUBSCRIBE</button>
            </form>
            <p className='text-pink-300 mt-2 text-xs'>
                    By subscribing, you agree to receive recurring automated promotional and personalized marketing emails (e.g. cart reminders) from us at the email used when subscribing.
                </p>
        </div>
        <div>

        </div>
      
    </div>
  )
}

export default NewsLetter
