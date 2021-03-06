import React, { Component } from 'react';
import classNames from 'classnames';
import fetch from 'isomorphic-fetch';
import './GigList.css';

import GigItem from '../GigItem/GigItem';
import Heading from '../Heading/Heading';

class GigList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [],
      isLoading: false,
      isLoaded: false,
      isFinished: false
    };
  }

  renderEvents(events) {
    //date,name,location, description
    return events.map((event, index) => {
      return <GigItem date={event.date}
                      time={event.time}
                      name={event.name}
                      location={event.location}
                      description={event.description}
                      index={index}
                      key={index}/>
    });
  }

  fetchEvents() {
    //dummy for loading spinner
    // const apiKey = 'AIzaSyD-vYO571FAY3B7hjNGfM7l8iCmpjDKAbU';
    // const calId = 'gcig6mtc8e2gvelm65pfcfr7vk@group.calendar.google.com';
    // const now = new Date().toISOString();
    // const url = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?key=${apiKey}&timeMin=${now}&orderBy=startTime&singleEvents=true`;

    const url = `${process.env.REACT_APP_CMS_URL}/events`;

    this.setState({
      isLoading: true
    });

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((events)=> {
        console.log(events);
        let gigs = [];
        events.events.map((event) => {
          gigs.push({
            date: event.eventDate,
            time: event.eventTime,
            name: event.eventName,
            location: event.eventLocation,
            description: ''
          });
        })
        //animation
        this.setState({
          isLoaded: true
        });
        setTimeout(()=>{
          this.setState({
            isLoading: false,
            isLoaded: false,
            isFinished: true,
            events: gigs
          });
        }, 500);
        console.log(gigs);
      });
  }

  componentDidMount(){
    this.fetchEvents();
  }

  render() {
    return (
      <div className='gig-list'>
        <div className='gig-list-container'>
          <div className={classNames('gig-list-items',
                                      {isLoading: this.state.isLoading},
                                      {isLoaded: this.state.isLoaded},
                                      {isFinished: this.state.isFinished})}>
            {this.renderEvents(this.state.events)}
          </div>
        </div>
      </div>
    );
  }
}

export default GigList;
