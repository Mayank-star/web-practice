import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className=' flex flex-col gap-3 w-1/6'>   
           <h1>Product page.</h1>
           <input type='text' placeholder='search product' className='hover:border-2 hover:border-yellow-500 border-2 border-gray-500 px-2 py-1'/>
           <nav className='bg-gray-400 py-4 flex  gap-2 justify-center'>
              <Link to='feature' className='bg-red-300 py-2 px-2'>Featured</Link>
              <Link to='new' className='bg-blue-300 py-2 px-6'>New</Link>
           </nav>
           <Outlet/>
    </div>
  )
}

export default Product
