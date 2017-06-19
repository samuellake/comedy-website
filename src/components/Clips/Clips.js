import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Heading from '../Heading/Heading';
import MediaPlayer from '../MediaPlayer/MediaPlayer';
import './Clips.css';

class Clips extends Component {

  render() {
    return(
      <div className="clips">
        <MediaPlayer /> 
      </div>
    )
  }
}

export default Clips;
