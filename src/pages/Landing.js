import React from 'react'
import Img from '../assets/landing.svg'
import {Link} from 'react-router-dom'
const Landing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100">
    <div className="md:w-1/2 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Bookify</h1>
      <p className="text-gray-600 mb-8">Are you looking for a simple and efficient way to manage your books? Try our Bookstore Management App, a web-based platform that lets you create, update, read, and delete books. You can also browse and search for books by various criteria. Register now and enjoy our amazing features</p>
      <Link to='./login'>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Login/Sign Up</button>    
      </Link>
      </div>
    <div className="md:w-1/2 p-4 hidden md:block">
      <img src={Img}/>
    </div>
  </div>  
  )
}

export default Landing