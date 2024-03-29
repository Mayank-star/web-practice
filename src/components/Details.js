import React from 'react'
import { useParams } from 'react-router-dom'
const Details = () => {

    const {userId}=useParams()  //get userId from url
  
  return (
    <div> 
         <h1>Details about user {userId} .</h1>
    </div>
  )
}

export default Details
