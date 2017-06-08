import React, { Component } from 'react';

import Heading from '../Heading/Heading';
import vice from '../../../public/images/vice.svg';
import bbc from '../../../public/images/bbc_radio_four_extra.svg';
import trophy from '../../../public/images/trophy.png';
import './Bio.css';

class Bio extends Component {

  render() {
    return(
      <div className="bio">
        <Heading title="Bio" subtitle="" />
        <p> Here is some text about me. Sam Lake. THE Sam Lake. I got mad skillz that bring in the bills</p>
        <Heading title="Awards & Features" subtitle="" />
        <div className="features-block">
          <div className="feature">
            <img src={vice}/>
            <p> Featured on VICE UK</p>
          </div>
          <div className="feature">
            <img src={bbc}/>
            <p> As Heard on BBC Radio 4 Xtra </p>
          </div>
          <div className="feature">
            <img src={trophy}/>
            <p> WINNER - South Coast Comedian of the Year </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio;
