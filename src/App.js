import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GigList from './components/GigList/GigList';
import NewsFeed from './components/NewsFeed/NewsFeed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Sam Lake</h1>
        </div>
        <NewsFeed />
      </div>
    );
  }
}

export default App;
