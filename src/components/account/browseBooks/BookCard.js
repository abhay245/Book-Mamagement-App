import {useContext,useState} from 'react'
import { Link } from 'react-router-dom';
import {BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import BookModal from './BookModal';
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'
import { FiShoppingCart } from "react-icons/fi";
import { AuthContext } from '../../../context/AuthContext';
import {toast} from 'react-toastify'
const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setDeleteModal]=useState(false);
  const [showEditModal,setEditModal]=useState(false);
  const {books,setBooks}=useContext(AuthContext)
  const AddtoCart = (title) => {
    setBooks((prevBooks) => [...prevBooks, title]);
    console.log(books);
    toast.success('Added to cart successfully!!');
  };
  
  
  return (
    <div className="max-w-60 bg-white border border-gray-200 rounded-lg shadow mb-2">
      <img src="https://picsum.photos/300" alt="" />
      <div className='p-2'>
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">{book.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.author}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book._id}</p>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button onClick={() => setShowModal(true)} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            <BiShow
              className='text-2xl text-blue-800 hover:text-black cursor-pointer'
            />
          </button>


          <button type="button" onClick={()=>setEditModal(true)}className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border-t border-r border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
              <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
          </button>

          <button type="button" onClick={()=>setDeleteModal(true)}className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border-t border-r border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
          </button>



          <button    onClick={() => AddtoCart(book.title)} type="button" className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
          <FiShoppingCart className='text-2xl text-blue-green-400 hover:text-black cursor-pointer' />
          </button>
        </div>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
      {showDeleteModal && (
        <DeleteModal book={book} setDeleteModal={setDeleteModal}/> 
      )}
      {showEditModal &&(
        <EditModal book={book} setEditModal={setEditModal}/>
      )}
    </div>

  )
};

export default BookCard;

//   <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow'>
//     <div className='flex align-middle'>

//     <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
//     {book.publishYear}</button>
//     <h4 className='mb-3 font-normal text-gray-700'>{book._id}</h4>
//     </div>
//     <div className='flex justify-start items-center gap-x-2'>
//       <PiBookOpenTextLight className='text-red-300 text-2xl' />
//       <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{book.title}</h2>
//     </div>
//     <div className='flex justify-start items-center gap-x-2'>
//       <BiUserCircle className='text-red-300 text-2xl' />
//       <h2 className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{book.author}</h2>
//     </div>
//     <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
//       <BiShow
//         className='text-3xl text-blue-800 hover:text-black cursor-pointer'
//         onClick={() => setShowModal(true)}
//       />
//       <Link to={`/books/edit/${book._id}`}>
//         <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
//       </Link>
//       <Link to={`/books/delete/${book._id}`}>
//         <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
//       </Link>
//     </div>
//     {showModal && (
//       <BookModal book={book} onClose={() => setShowModal(false)} />
//     )}
//   </div>
// );