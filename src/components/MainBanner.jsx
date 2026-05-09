import React from 'react'
import Banners from './Banners'
import { assets } from '../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';


const MainBanner = () => {
  return (
    <div className='max-w-[1400px] mx-auto p-8'>
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 2500, // Time interval for auto transition
            disableOnInteraction: false, // Keep autoplay running after interaction
          }}
          loop={true}  // Enables looping
          direction="horizontal" // Ensures horizontal direction (right to left)
          modules={Autoplay}
          className="mySwiper"
        >
          <SwiperSlide>
            <Banners text1={'Spring into Savings!'} text2={'Up to 50% Off – Limited Time Only!'} text3={"Refresh your wardrobe, home, and lifestyle with our biggest seasonal discounts. Don't miss out—shop now before the deals disappear!"} src={assets.banner01}/>
          </SwiperSlide>
          <SwiperSlide>
          <Banners text1={'Spring into Savings!'} text2={'Up to 50% Off – Limited Time Only!'} text3={"Refresh your wardrobe, home, and lifestyle with our biggest seasonal discounts. Don't miss out—shop now before the deals disappear!"} src={assets.banner02}/>
          </SwiperSlide>
          <SwiperSlide>
          <Banners text1={'Spring into Savings!'} text2={'Up to 50% Off – Limited Time Only!'} text3={"Refresh your wardrobe, home, and lifestyle with our biggest seasonal discounts. Don't miss out—shop now before the deals disappear!"} src={assets.banner03}/>
          </SwiperSlide>
          <SwiperSlide>
          <Banners text1={'Spring into Savings!'} text2={'Up to 50% Off – Limited Time Only!'} text3={"Refresh your wardrobe, home, and lifestyle with our biggest seasonal discounts. Don't miss out—shop now before the deals disappear!"} src={assets.banner04}/>
          </SwiperSlide>
        </Swiper>
      
    </div>
  )
}

export default MainBanner
