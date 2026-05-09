import React from 'react'

const About = () => {
  return (
    <section className='bg-white py-16 px-6 lg:px-12 overflow-hidden'>

      <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>

        {/* LEFT CONTENT */}
        <div className='space-y-6'>

          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 opacity-0 animate-[fadeInUp_0.8s_ease-in-out_forwards]'>
            About <span className='text-pink-500'>Vanessa</span>
          </h2>

          <p className='text-gray-600 leading-7 text-sm md:text-base opacity-0 animate-[fadeInUp_1s_ease-in-out_forwards]'>
            Vanessa is a modern fashion ecommerce platform designed to bring elegance, comfort, and confidence to every woman. We carefully curate collections that match today’s trends while keeping timeless beauty alive.
          </p>

          <p className='text-gray-600 leading-7 text-sm md:text-base opacity-0 animate-[fadeInUp_1.2s_ease-in-out_forwards]'>
            Our goal is to redefine online shopping by offering premium quality, affordable pricing, and a smooth user experience that feels effortless and enjoyable.
          </p>

          {/* EXTRA STORY BLOCK */}
          <div className='bg-pink-50 border border-pink-100 rounded-xl p-5 opacity-0 animate-[fadeInUp_1.4s_ease-in-out_forwards]'>

            <h3 className='text-pink-500 font-semibold mb-2'>
              Our Promise
            </h3>

            <p className='text-sm text-gray-600 leading-6'>
              Every product at Vanessa is selected with care to ensure it brings confidence, comfort, and elegance to your everyday life. We believe fashion should empower, not complicate.
            </p>

          </div>

          {/* STATS */}
          <div className='grid grid-cols-3 gap-6 pt-4 opacity-0 animate-[fadeInUp_1.6s_ease-in-out_forwards]'>

            <div className='text-center hover:scale-105 transition duration-300'>
              <h3 className='text-2xl font-bold text-pink-500'>10K+</h3>
              <p className='text-xs text-gray-500'>Happy Customers</p>
            </div>

            <div className='text-center hover:scale-105 transition duration-300'>
              <h3 className='text-2xl font-bold text-pink-500'>500+</h3>
              <p className='text-xs text-gray-500'>Products</p>
            </div>

            <div className='text-center hover:scale-105 transition duration-300'>
              <h3 className='text-2xl font-bold text-pink-500'>4.9★</h3>
              <p className='text-xs text-gray-500'>Ratings</p>
            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className='relative flex justify-center items-center'>

          {/* Background Glow */}
          <div className='absolute w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-60 animate-pulse'></div>

          {/* Main Card */}
          <div className='relative bg-white shadow-xl rounded-3xl p-8 w-full max-w-sm transform hover:scale-105 transition duration-500'>

            <h3 className='text-lg font-semibold text-gray-800 mb-4'>
              Why Choose Us?
            </h3>

            <ul className='space-y-3 text-sm text-gray-600'>

              <li className='flex items-center gap-2 hover:translate-x-1 transition'>
                <span className='text-pink-500'>✓</span>
                Premium Quality Fashion
              </li>

              <li className='flex items-center gap-2 hover:translate-x-1 transition'>
                <span className='text-pink-500'>✓</span>
                Affordable Pricing
              </li>

              <li className='flex items-center gap-2 hover:translate-x-1 transition'>
                <span className='text-pink-500'>✓</span>
                Fast & Reliable Delivery
              </li>

              <li className='flex items-center gap-2 hover:translate-x-1 transition'>
                <span className='text-pink-500'>✓</span>
                Secure Shopping Experience
              </li>

            </ul>

            {/* EXTRA MINI SECTION */}
            <div className='mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500'>
              Trusted by thousands of women across Sri Lanka for daily fashion needs.
            </div>

          </div>

          {/* Floating Badge */}
          <div className='absolute -top-4 -right-4 bg-pink-500 text-white text-xs px-4 py-2 rounded-full shadow-lg animate-bounce'>
            Trusted Brand
          </div>

        </div>

      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </section>
  )
}

export default About