import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <div>
      <form className='flex flex-col full-width items-start gap-3'>
        <div>
          <p className='mb-2'>Upload Image</p>
          <div className='flex gap-2'>
            <label htmlFor="image1">
              <img src={assets.upload_area} className='w-20' alt="" />
              <input type="file" id='image1' hidden />
            </label>
            <label htmlFor="image2">
              <img src={assets.upload_area} className='w-20' alt="" />
              <input type="file" id='image2' hidden />
            </label>
            <label htmlFor="image3">
              <img src={assets.upload_area} className='w-20' alt="" />
              <input type="file" id='image3' hidden />
            </label>
            <label htmlFor="image4">
              <img src={assets.upload_area} className='w-20' alt="" />
              <input type="file" id='image4' hidden />
            </label>            
          </div>
          <p className="text-gray-500 text-sm">Drag and drop or click to upload (PNG, JPG, GIF up to 10MB)</p>
        </div>
      </form>
    </div>
  )
}

export default Add
