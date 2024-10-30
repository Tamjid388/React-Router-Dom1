import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav className="bg-blue-600 p-4">
      <h2 className="text-white text-2xl font-bold mb-2">My Werbsite</h2>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-blue-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-blue-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-blue-200">
            Contact
          </Link>
       
        </li>
        <li>
          <Link to="/users" className="text-white hover:text-blue-200">
            Users
          </Link>
       
        </li>
        <li>
          <Link to="/posts" className="text-white hover:text-blue-200">Posts</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}
