import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../Spinner.js';
import BooksCard from './BooksCard.js'
import { toast } from 'react-toastify'
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }
  const handleSearch = (event) => {
    event.preventDefault();
    axios
      .get('http://localhost:5000/books?title=' + searchValue)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
  }
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/getBooks')
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8 mx-2'>Browse Books</h1>

      </div>
      {/* Search Bar */}
      <form className="w-full mx-2 md:w-1/2 md:mx-auto mb-8">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" value={searchValue} onChange={handleChange} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " required />
          <button type="submit" onClick={handleSearch} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>
      </form>
      {/* End of Search Bar */}
      {loading ? (
        <Spinner />
      ) :
        <BooksCard books={books} />
      }
    </div>
  );
};

export default Home;