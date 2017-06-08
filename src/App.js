import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GigList from './components/GigList/GigList';
import Bio from './components/Bio/Bio';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Nav from './components/Nav/Nav';
import TabContainer from './components/TabContainer/TabContainer';
import Tab from './components/Tab/Tab';
import Home from './components/Home/Home';
import Clips from './components/Clips/Clips';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://yt3.ggpht.com/-rbcC6Hd9Cck/AAAAAAAAAAI/AAAAAAAAAAA/NT0jyoaJFwA/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" />
          <h1>Sam Lake</h1>
        </div>
        <TabContainer selected={1}>
          <Tab label="HOME">
            <Home/>
          </Tab>
          <Tab label="BIO" >
            <Bio/>
          </Tab>
          <Tab label="NEWS">
            <NewsFeed/>
          </Tab>
          <Tab label="GIGS" >
            <GigList/>
          </Tab>
          <Tab label="CLIPS" >
            <Clips/>
          </Tab>
        </TabContainer>
      </div>
    );
  }
}

export default App;
