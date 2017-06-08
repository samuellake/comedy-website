import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import Heading from '../Heading/Heading';
import homeImage from '../../../public/images/home_1.jpg';
import './Home.css';

class Home extends Component {

  render() {

    const color = "#008b8b";

    return(
      <div className="home">
        <Heading title="Sam Lake" subtitle="Comedian | Performer | Writer" />
        <img src={homeImage}/>
        <div className="social">
          <SocialIcon url="https://www.facebook.com/JokingHazardUK" color={color}/>
          <SocialIcon url="https://twitter.com/MrSamLake" color={color}/>
          <SocialIcon url="https://www.youtube.com/channel/UCP4HfYDH9EKS_CdoEZk2itA" color={color}/>
        </div>
      </div>
    )
  }
}

export default Home;
