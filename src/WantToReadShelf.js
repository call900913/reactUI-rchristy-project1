import React, { Component } from "react";
import Book from './Book';

class WantToReadShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.state.books.map((obj) => (
              <Book />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToReadShelf;
