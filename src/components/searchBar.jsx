import React from 'react'

const searchBar = () => {
    const {search, setSearch, showSearch, setshowSearch} = useContext(ShopContext);
  return showSearch ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search'/>

        </div>
      
    </div>
  ) : null
}

export default searchBar
