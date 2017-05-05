import React, { Component } from 'react';
import './GigItem.css';

class GigItem extends Component {
  render() {
    return (
      <div className="gig-item">
        <a href="#">
          <div className="gig-item-date">
            <span className="gig-item-date-day">14
              <span className="gig-item-date-month">AUG</span>
            </span>
            <div className="gig-item-date-time">7PM</div>
          </div>
          <div className="gig-item-details">
            <div className="gig-item-details-name">GIG NAME</div>
            <div className="gig-item-details-location">LOCATION</div>
            <div className="gig-item-details-description"> This is a description. </div>
          </div>
        </a>
      </div>
    );
  }
}

export default GigItem;
