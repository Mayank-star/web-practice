import React from 'react'
import { useAuth } from './Auth'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
   const auth = useAuth()
   const navigate = useNavigate()
   const [user , setUser]=useState('')
   const location = useLocation()
   const redirectPath = location.state?.path || '/'
   const handleSubmit=()=>{
       auth.login(user)
       navigate(redirectPath,{replace:true})
    } 
    return (
        <div>
        {/* {console.log("path",redirectPath)} */}
          {/* {console.log(auth)} */}
            <label>
                username:<input type='text' placeholder='Enter username' onChange={(e)=>setUser(e.target.value)} className='border-2 border-black'/>
            </label>
            <br/><br/>
            <button onClick={handleSubmit} className='border-black border-2 ml-10'>Login</button>
    </div>
  )
}

export default Login
