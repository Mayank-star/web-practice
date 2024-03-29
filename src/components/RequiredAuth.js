import React from 'react'
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const RequiredAuth = ({children}) => {
    
  const auth = useAuth()
  const location = useLocation()
     
  if(!auth.user){
    return <Navigate to='/login' state={{path:location.pathname}}/>
  }

  return children
}

export default RequiredAuth
