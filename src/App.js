import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ListShelves from './ListShelves';
import SearchPage from './SearchPage';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListShelves />
        )}/>
        <Route exact path='/search' render={() => (
          <SearchPage />
        )}/>
      </div>
    )
  }
}

export default App;
