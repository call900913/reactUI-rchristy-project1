import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CurrentlyReadingShelf from './CurrentlyReadingShelf';
import WantToReadShelf from './WantToReadShelf';
import HaveReadShelf from './HaveReadShelf';

class ListShelves extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <CurrentlyReadingShelf />
        <WantToReadShelf />
        <HaveReadShelf />
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListShelves;
