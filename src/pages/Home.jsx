import React from 'react'
import Hero from '../components/Hero'
import Policy from '../components/Policy'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import MainBanner from '../components/MainBanner'

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <MainBanner/> */}
      <LatestCollection/>
      <BestSeller/>
      <Policy />
      
    </div>
  )
}

export default Home
