import React from 'react'
import {  NavLink ,Link} from 'react-router-dom'
import { useAuth } from './Auth'



const Navbar = () => {
  const auth = useAuth()
  const navlinkStyles =({isActive})=>{
      return{
        fontWeight:isActive ? "bold" : "normal",
        textDecoration : isActive ? "none":"underline",
      }
  }
  return (
      <nav className=' p-4 bg-slate-400 flex justify-start gap-3 '>
              {/* <Link  to='/' className='bg-red-500 p-3 text-lg hover:bg-red-700 hover:text-white'  >Home</Link>
              <Link to='/about' className='bg-yellow-500 p-3 text-lg hover:bg-yellow-700 hover:text-white'>About</Link> */}
              <NavLink to='/'   style={navlinkStyles} >Home</NavLink>
              <NavLink to='/about' style={navlinkStyles}>About</NavLink>
              <NavLink to='/product' style={navlinkStyles}>Product</NavLink>
              <NavLink to='/profile' style={navlinkStyles}> Profile</NavLink>

              {
                !auth.user &&  <NavLink to='/login' style={navlinkStyles}>Login</NavLink>
              }
              
      </nav>
  )
}

export default Navbar 
