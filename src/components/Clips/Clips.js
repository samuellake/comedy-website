import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Heading from '../Heading/Heading';
import MediaPlayer from '../MediaPlayer/MediaPlayer';
import './Clips.css';

class Clips extends Component {

  render() {
    return(
      <div className="clips">
        <Heading title="Clips" subtitle="Oh Honey, clips honey!? Yeah, I got some clips honey! Honey! Oh, Honey!" />
        <MediaPlayer />
      </div>
    )
  }
}

export default Clips;
