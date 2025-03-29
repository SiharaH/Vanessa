import React from 'react'
import { useContext, useState,useParams, useEffect } from 'react'

const Product = () => {

  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if(item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId])

  return productData ? (
    <div>
      
    </div>
  ) :
  <div className='opacity-0'>

  </div>
}

export default Product
