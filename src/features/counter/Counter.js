import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment } from './CounterSlice'
const Counter = () => {

    const count =useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
                <span>value :   {count}</span><br/>
                <button onClick={()=>{dispatch(increment())}} >increment</button> <br/>
                <button onClick={()=>{dispatch(decrement())}}>decrement</button><br/>
    </div>
  )
}

export default Counter
