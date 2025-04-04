import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency, deliveryFee, getCartAmount} = useContext(ShopContext);
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'Cart'} text2={'Total'} />
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Sub Total</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />

            <div className='flex justify-between'>
                <p>Shipping Charges</p>
                <p>{currency}{deliveryFee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between font-bold'>
                <p>Total</p>
                <p>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00</p>

            </div>
        </div>
      
    </div>
  )
}

export default CartTotal
