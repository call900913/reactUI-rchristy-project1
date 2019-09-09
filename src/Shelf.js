import React, { Component } from 'react';
import Book from './Book';
const Shelf = props => {
  let bookshelftitle;
  if (props.heading === 'currentlyReading') {
    bookshelftitle = 'Currently Reading';
  } else if (props.heading === 'wantToRead') {
    bookshelftitle = 'Want to Read';
  } else {
    bookshelftitle = 'Read';
  }
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelftitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((id) => (<Book key={id} id={id} handleChange={props.handleChange}/>))}
        </ol>
      </div>
    </div>
  )
}
export default Shelf;
