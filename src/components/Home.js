import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className=' flex flex-col gap-3 w-1/6'>
        <h1>Home page</h1>
        <button onClick={()=> navigate('order-summary')} className='border-2 border-blue-700 px-3 py-1'>Place order</button>
    </div>
  )
}

export default Home
