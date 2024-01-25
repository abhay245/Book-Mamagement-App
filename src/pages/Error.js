import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/error.svg'
const Error = () => {
  return (
    <div>
        <img src={Logo} className=' hidden md:block mx-auto my-auto w-100 h-100'/>
        <p className='text-xl font-bold text-center'>Oops! Something went wrong.</p>
        <p className='text-lg text-gray-600 text-center'>We're sorry for inconvenience. Please try again</p>
        <Link to='/'>
        <button type="button" class="top-50 left-50 absolute text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Redirect to Home</button>
        </Link>
    </div>
  )
}

export default Error