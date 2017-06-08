import React, { Component } from 'react';
import moment from 'moment';
import './GigItem.css';

class GigItem extends Component {
  render() {

    const {date, name, location, description, index} = this.props;
    const dateDetails = moment(date);

    const style = {
      'animation-delay': `${index * 0.05}s`
    }

    return (
      <div className="gig-item" style={style}>
        <a href="#">
          <div className="gig-item-date">
            <span className="gig-item-date-day">{dateDetails.date()}
              <span className="gig-item-date-month"> {dateDetails.format("MMM")}</span>
            </span>
            <div className="gig-item-date-time">{dateDetails.format("HH:mm")}</div>
          </div>
          <div className="gig-item-details">
            <div className="gig-item-details-name">{name}</div>
            <div className="gig-item-details-location">{location ? location : "London, UK"}</div>
            <div className="gig-item-details-description"> This is a description. </div>
          </div>
        </a>
      </div>
    );
  }
}

export default GigItem;
