import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const SearchBar = () => {

  const { search, setSearch, showSearch } = useContext(ShopContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (search) navigate('/productsearch')
  }, [search])

  return showSearch ? (
    <div className='border-t border-b bg-gradient-to-r from-pink-50 to-white text-center py-4'>

      <div className='inline-flex items-center justify-center border border-gray-300 px-5 py-2 my-3 rounded-full w-3/4 sm:w-1/2 shadow-sm focus-within:border-pink-400 transition'>

        {/* Search Input */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-transparent text-sm'
          type="text"
          placeholder='Search products...'
        />

      </div>

    </div>
  ) : null
}

export default SearchBar