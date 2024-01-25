import React, { useState,useContext } from 'react'
import Logo from '../assets/login_page.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {AuthContext} from '../context/AuthContext'
const Login = () => {
  const navigate = useNavigate();
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [Login, setLogin] = useState(true);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };
  const handleClick = () => {
    setLogin(!Login);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Login === true) {
      try {
        const { email, password } = form;
        console.log(email,password);
        const response = await axios.post('http://localhost:5000/login', { email, password },{withCredentials:true});
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
        toast.success(response.data);
        setIsLoggedIn(true);
        navigate('/');
      }
      catch (error) {
        toast.error(error.response.data.message);
      }
    }
    else {
      try {
        const { firstName, lastName, email, password } = form;
        const response = await axios.post('http://localhost:5000/signUp', { firstName, lastName, email, password });
        toast.success(response.data);
        navigate('/')
      }
      catch (error) {
        toast.error(error.response.data.message);
      }
    }
  }
  
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-12 sm:col-span-4'>
        <form className="max-w-sm mx-auto shadow-xl h-screen p-2 flex flex-col justify-center align-middle">
          <p className='text-3xl font-bold mb-5'>{Login === false ? 'Sign Up' : 'Login'}</p>
          <div className={Login === true ? 'mb-5 hidden' : 'mb-5'}>
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
            <input type="text" id="firstName" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
          </div>
          <div className={Login === true ? 'mb-5 hidden' : 'mb-5'}>
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
            <input type="text" id="lastName" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input type="email" id="email" onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input type="password" id="password" onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div className={Login === true ? 'mb-5 hidden' : 'mb-5'}>
            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 ">Repeat password</label>
            <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div className='ms-2 text-sm font-medium text-gray-900  my-4'>
            {Login === false ?
              <>
                <span className='ms-2 text-sm font-medium text-gray-900'> Already have an Account? </span>
                <span onClick={handleClick} className='text-blue-600 hover:underline'>Login to your account</span>
              </>
              :
              <>
                <span className='ms-2 text-sm font-medium text-gray-900'> Don't have an Account? </span>
                <span onClick={handleClick} className='text-blue-600 hover:underline'>Create new Account</span>
              </>
            }
          </div>

          <button type="submit"  onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >{Login === true ? "Login to your existing account" : "Register new Account"}</button>
        </form>
      </div>
      <div className='col-span-8 hidden sm:block '>
        <img src={Logo} className='mx-5 h-screen' />
      </div>
    </div>

  )
}
export default Login