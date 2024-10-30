import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function UserDetails() {
  const user =useLoaderData()
  const {name} = user
  return (
    <div>
      <h2>Details ABout User: {name}</h2>
    </div>
  )
}
