import React, { Component } from 'react';
import './GigList.css';

import GigItem from '../GigItem/GigItem';
import Heading from '../Heading/Heading';

class GigList extends Component {
  render() {
    return (
      <div className="gig-list">
        <Heading />
        <div className="gig-list-items">
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
        </div>
      </div>
    );
  }
}

export default GigList;
