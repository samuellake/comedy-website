import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import Heading from '../Heading/Heading';
import homeImage from '../../../public/images/home_1.jpg';
import './Home.css';

class Home extends Component {

  render() {

    return(
      <div className="home">
        <img src={homeImage}/>
      </div>
    )
  }
}

export default Home;
