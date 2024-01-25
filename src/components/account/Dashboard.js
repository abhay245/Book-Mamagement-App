import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';
const Dashboard = () => {
    const [firstName,setFirstName]=useState();
    const [lastName,setLastName]=useState();
    const [email,setEmail]=useState();
    useEffect(()=>{
      const getUserInfo = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('http://localhost:5000/user-info', {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          });
          setFirstName(response.data.user.firstName);
          setLastName(response.data.user.lastName);
          setEmail(response.data.user.email);
        } catch (error) {
          console.error(error);
        }
      }
    getUserInfo();  
    },[]);
  
    const handleSubmit =async (e)=>{
      e.preventDefault();
      try{
        const token = localStorage.getItem('token');
        const response = await axios.put('http://localhost:5000/updateUser',{firstName,lastName,email},
        {headers:{
          "Authorization": `Bearer ${token}`
        }}
        );
        toast.success(response.data.message);
      }
      catch(error){
        toast.error(error.data.message);
      }
    }
  return (
      <form class="max-w-sm col-span-3 px-4 py-2 md:col-span-2">
        <h1 className='text-2xl font-bold py-2'>Update Information</h1>
  <div class="mb-5">
    <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900">First Name</label>
    <input type="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} id="firstName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
  </div>
  <div class="mb-5">
    <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
    <input type="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} id="lastName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
  </div>
  <button type="submit" onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update information</button>
</form>
  )
}

export default Dashboard