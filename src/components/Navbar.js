import React,{useState,useEffect,useContext} from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext.js'
const Navbar = () => {
  const navigate = useNavigate();
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
  const handleLogout = async (e) => { 
    try { 
      e.preventDefault(); 
      await axios.post('http://localhost:5000/logout', { withCredentials: true }); 
      setIsLoggedIn(false); 
      localStorage.removeItem('token');
      toast.success('User successfully logged out') 
      navigate('/') 
    } 
    catch (err) { 
      console.error(err); 
    } 
  }
  
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <div className='flex flex-row'>
          <img src={Logo} className='w-16 h-16' />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">Bookify</span>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <p className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Home</p>
            </li>
            {isLoggedIn?
            (
              <Link to='/account'>
              <li>
                <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">My Account</p>
              </li>
            </Link>
            )
            :
            (
              <Link to='/login'>
              <li>
                <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Login/Sign Up</p>
              </li>
            </Link>
            )}
            {isLoggedIn?
            (
              <li>
                <p  onClick={handleLogout} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Logout</p>
              </li>
            ):(
              <></>
            )}

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar