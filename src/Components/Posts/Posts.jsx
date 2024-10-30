import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Post from './Post'

export default function () {
    const posts=useLoaderData()
 
  return (
    <div className="p-6 grid grid-cols-4 gap-4">
     
      
       
     {
      posts.map(post=><Post Post={post}></Post>)
     }
    </div>
  )
}
