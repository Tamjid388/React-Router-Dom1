import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function 
({Post}) {
   const {id,title} =Post
   const navigate=useNavigate()
   const handleShowDetail=()=>{
    navigate(-1)
   }
  return (
    <div className='mb-4 border p-4 flex flex-col justify-between space-y-4'>
   <h3 > <span className='font-bold text-blue-800'>ID:</span> {id}</h3>     
<h3 > <span className='font-bold text-blue-800'>Title:</span> {title}</h3>

<button className="btn btn-primary "
onClick={handleShowDetail}
>GO BACK</button>
    </div>
  )
}
