import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GigList from './components/GigList/GigList';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Nav from './components/Nav/Nav';
import TabContainer from './components/TabContainer/TabContainer';
import Tab from './components/Tab/Tab';
import Home from './components/Home/Home';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Sam Lake</h1>
        </div>
        <TabContainer selected={1}>
          <Tab label="HOME">
            <Home/>
          </Tab>
          <Tab label="NEWS">
            <NewsFeed/>
          </Tab>
          <Tab label="GIGS" >
            <GigList/>
          </Tab>
        </TabContainer>
      </div>
    );
  }
}

export default App;
