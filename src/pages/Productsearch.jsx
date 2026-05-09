import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Productsearch = () => {

  const { search } = useContext(ShopContext)

  const products = [
    { id: 1, name: "Summer Dress", price: 2500 },
    { id: 2, name: "Casual T-Shirt", price: 1200 },
    { id: 3, name: "Sneakers", price: 5500 },
    { id: 4, name: "Handbag", price: 3200 },
    { id: 5, name: "Jeans", price: 4000 }
  ]

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Search Results for: "{search}"
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-pink-500">Rs. {item.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No products found
          </p>
        )}

      </div>

    </div>
  )
}

export default Productsearch