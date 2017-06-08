import React, { Component } from 'react';
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import YoutubePlayer from 'react-youtube-player';
import './MediaPlayer.css';

class MediaPlayer extends Component {

  render() {

    const {id} = this.props;

    return(
      <div className="media-player">
        <YoutubePlayer
          videoId="2xg_nQY3sK8"
          playbackState='unstarted'
          configuration={
            {
            showinfo: 0,
            controls: 0
            }
        }/>
      </div>
    )
  }
}

export default MediaPlayer;
