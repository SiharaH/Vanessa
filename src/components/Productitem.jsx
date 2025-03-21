import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Productitem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext);
  return (
    <div>
        <Link className='text-gray-600 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden rounded-lg'>
            <img src={image[0]} className='hover:scale-110 transition ease-in-out' />
        </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency} {price}</p>

        </Link>
      
    </div>
  )
}

export default Productitem
