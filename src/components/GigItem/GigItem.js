import React, { Component } from 'react';
import './GigItem.css';

class GigItem extends Component {
  render() {
    return (
      <div className="gig-item">
        <div className="gig-item-date">
          <span className="gig-item-date-day">14</span>
          <span className="gig-item-date-month">AUG</span>
          <span className="gig-item-date-time">7PM</span>
        </div>
        <div className="gig-item-details">
          <div className="gig-item-details-name">GIG NAME</div>
          <div className="gig-item-details-location">LOCATION</div>
        </div>
      </div>
    );
  }
}

export default GigItem;
