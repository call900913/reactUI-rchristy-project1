import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ListShelves from './ListShelves';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  getBooks = () => {
    BooksAPI.getAll().then((result) => {
      console.log('get all result: ', result);
      const a1 = [];
      const a2 = [];
      const a3 = [];
      result.forEach((item) => {
        if (item.shelf === 'currentlyReading') {
          a1.push(item.id);
        } else if (item.shelf === 'wantToRead') {
          a2.push(item.id);
        } else if (item.shelf === 'read') {
          a3.push(item.id);
        }
      })
      this.setState((prevState) => ({
        currentlyReading: a1,
        wantToRead: a2,
        read: a3
      }))
    })
  }

  componentDidMount() {
    this.getBooks();
  }

  handleChange = (book, shelf) => {
    console.log('entering');
    console.log('book: ', book);
    console.log('shelf: ', shelf);
    BooksAPI.update({ id: book }, shelf);
    this.getBooks();
    console.log('exiting');
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListShelves shelves={this.state} handleChange={this.handleChange}/>
        )}/>
        <Route exact path='/search' render={() => (
          <SearchPage handleChange={this.handleChange}/>
        )}/>
      </div>
    )
  }
}

export default App;
