import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import Productitem from '../components/Productitem'

const Collection = () => {

  const { products, search } = useContext(ShopContext)

  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  // ---------------- CATEGORY FILTER ----------------
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  // ---------------- SUB CATEGORY FILTER ----------------
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  // ---------------- APPLY FILTER (CATEGORY + SUBCATEGORY + SEARCH) ----------------
  const applyFilter = () => {
    let productsCopy = products.slice()

    // category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      )
    }

    // subcategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item =>
        subCategory.includes(item.subCategory)
      )
    }

    // 🔥 SEARCH FILTER (GLOBAL)
    if (search && search.trim() !== '') {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    setFilterProducts(productsCopy)
  }

  // ---------------- SORT PRODUCTS ----------------
  const sortProduct = () => {
    let fpcopy = [...filterProducts]

    switch (sortType) {
      case 'low-high':
        fpcopy.sort((a, b) => a.price - b.price)
        break

      case 'high-low':
        fpcopy.sort((a, b) => b.price - a.price)
        break

      default:
        applyFilter()
        return
    }

    setFilterProducts(fpcopy)
  }

  // ---------------- EFFECTS ----------------
  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* ---------------- FILTER SECTION ---------------- */}
      <div className='min-w-60'>

        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTER
          <img
            className={`h-3 sm:hidden transition-transform ${showFilter ? '-rotate-90' : 'rotate-180'}`}
            src={assets.back}
            alt=""
          />
        </p>

        {/* CATEGORY */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input type='checkbox' value='Men' onChange={toggleCategory} />
              Men
            </label>

            <label className='flex gap-2'>
              <input type='checkbox' value='Women' onChange={toggleCategory} />
              Women
            </label>

            <label className='flex gap-2'>
              <input type='checkbox' value='Kids' onChange={toggleCategory} />
              Kids
            </label>
          </div>
        </div>

        {/* SUB CATEGORY */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input type='checkbox' value='Topwear' onChange={toggleSubCategory} />
              Top Wear
            </label>

            <label className='flex gap-2'>
              <input type='checkbox' value='Bottomwear' onChange={toggleSubCategory} />
              Bottom Wear
            </label>

            <label className='flex gap-2'>
              <input type='checkbox' value='Winterwear' onChange={toggleSubCategory} />
              Winter Wear
            </label>
          </div>
        </div>

      </div>

      {/* ---------------- PRODUCT SECTION ---------------- */}
      <div className='flex-1'>

        {/* TITLE + SORT */}
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'Products'} />

          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2 cursor-pointer'
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* PRODUCTS */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

          {filterProducts.length > 0 ? (
            filterProducts.map((item) => (
              <Productitem
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p className='text-gray-500 col-span-full text-center'>
              No products found
            </p>
          )}

        </div>

      </div>

    </div>
  )
}

export default Collection