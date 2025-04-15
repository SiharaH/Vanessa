import React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <>
      <NavBar />
      <hr />
      <div className='flex w-full'>
      <SideBar/>
      </div>
      
      </>
      
    </div>
  )
}

export default App
