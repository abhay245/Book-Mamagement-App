import React,{useState} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
const AddBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [desc,setDesc]=useState('');
    const handleSaveBook = () => {
      const data = { title, author, publishYear,desc };
      axios
        .post('http://localhost:5000/book', data)
        .then(() => {
          toast.success(`${title} added`)
        })
        .catch((error) => {
          toast.error(`${error}`);
        })
    }
    return (
       <div>
     <h5 className='text-2xl font-bold p-2'>Add Book</h5>   
<form className="w-full mx-auto">

<div className="mb-5">
  <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900">Title of Book </label>
  <input type="text" id="large-input" onChange={(e) => setTitle(e.target.value)} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
</div>
<div className="mb-5">
  <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Publication Year</label>
  <input type="text" id="base-input" onChange={(e) => setPublishYear(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
</div>
<div className='mb-5'>
  <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Author</label>
  <input type="text" id="smaill-input" onChange={(e) => setAuthor(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
</div>
<div className="mb-5">
  <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900">Description </label>
  <input type="text" id="large-input" onChange={(e) => setDesc(e.target.value)} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
</div>
<button 
type="button" 
className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 my-5"
onClick={handleSaveBook}
>
Add Book
</button>
</form>

       </div> 
    )
  
  
  }

export default AddBooks

