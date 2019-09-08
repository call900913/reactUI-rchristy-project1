import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      name: '',
      thumbnail: 'url("")',
      shelf: ''
    }
  }

  // some kind of setState with this.props.book
  // or pass in a function to update this state

  render() {
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: {this.state.thumbnail} }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.state.name}</div>
          <div className="book-authors">{this.state.author}</div>
        </div>
      </li>
    )
  }
}

export default Book;
