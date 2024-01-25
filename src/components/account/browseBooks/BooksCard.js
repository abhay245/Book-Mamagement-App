import React from 'react'
import BookCard from './BookCard.js'
const BooksCard = ({books}) => {
  return (
    <div className='mx-5 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {books.map((item)=>(
            <BookCard key={item._id} book={item}/>
        ))}
    </div>
  )
}

export default BooksCard