import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const EditModal = ({book,setEditModal}) => {
    const navigate=useNavigate();
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [publishYear, setPublishYear] = useState(book.publishYear);
    const handleEditBook = () => {
        const data = { title, author, publishYear };
        axios
          .put(`http://localhost:5000/books/${book._id}`, data)
          .then(() => {
            navigate('/')
          })
          .catch((error) => {
            alert('An error happened. Please check console');
            console.log(error);
          })
      }
  return (
    <div className="flex items-center justify-center">
    
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Edit Book
                </h3>
                <div className="mt-2">

            <form className="w-full mx-auto">
          <div className="mb-5">
            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900">Title of Book </label>
            <input type="text" id="large-input" value={title} onChange={(e) => setTitle(e.target.value)} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
          </div>
          <div className="mb-5">
            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Pulication Year</label>
            <input type="text" id="base-input" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
          </div>
          <div>
            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Author</label>
            <input type="text" id="smaill-input" value={author} onChange={(e) => setAuthor(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
          </div>
        </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button 
              type="button" 
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              onClick={handleEditBook}
            >
              Update
            </button>
            <button 
              type="button" 
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={()=>setEditModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default EditModal