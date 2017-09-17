import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import logo from './logo.svg';
import headerProfile from '../public/images/header_profile.jpg';
import content from '../public/content.json';
import './App.css';

import GigList from './components/GigList/GigList';
import Bio from './components/Bio/Bio';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Nav from './components/Nav/Nav';
import TabContainer from './components/TabContainer/TabContainer';
import Tab from './components/Tab/Tab';
import Home from './components/Home/Home';
import Clips from './components/Clips/Clips';
import runtimeEnv from '@mars/heroku-js-runtime-env';




class App extends Component {

  render() {

    const env = runtimeEnv();
    console.log("THIS IS THE ENV VARIABLES", env);
    console.log("THIS IS THE ENV VARIABLES", process.env.REACT_APP_CMS_URL);


    const {stories} = content;
    const style = { height: 25, width: 25};

    return (
      <div className="App">
        <div className="App-header">
          <img src={headerProfile} />
          <div className="nav-details">
            <h1>Sam Lake</h1>
            <h2> Comedian | Writer | Performer </h2>
          </div>
          <div className="social">
            <SocialIcon url="https://www.facebook.com/JokingHazardUK" style={style} color={'white'}/>
            <SocialIcon url="https://twitter.com/MrSamLake" style={style} color={'white'}/>
            <SocialIcon url="https://www.youtube.com/channel/UCP4HfYDH9EKS_CdoEZk2itA" style={style} color={'white'}/>
          </div>
        </div>
        <TabContainer selected={1}>
          <Tab label="ABOUT">
            <Home/>
          </Tab>
          <Tab label="NEWS">
            <NewsFeed stories={stories}/>
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
