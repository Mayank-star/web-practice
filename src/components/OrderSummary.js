import React from 'react'
import { useNavigate } from 'react-router-dom'
const OrderSummary = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-3 w-1/6'>
             <h1>Order confirmed !</h1>
             <button onClick={()=> navigate(-1)} className='border-2 border-red-700 px-3 py-1'>Go back</button>
    </div>
  )
}

export default OrderSummary
