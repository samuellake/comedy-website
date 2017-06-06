import React, { Component } from 'react';
import classNames from 'classnames';
import './GigList.css';

import GigItem from '../GigItem/GigItem';
import Heading from '../Heading/Heading';

class GigList extends Component {

  constructor(props) {
    super(props);

    this.state ={
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
                      name={event.name}
                      location={event.location}
                      description={event.description}
                      key={index}/>
    });
  }

  fetchEvents() {
    //dummy for loading spinner
    const events = [
      {date: '17AUG', name:'Gig #1', location: 'London', description: "It's a gig barbara"},
      {date: '17AUG', name:'Gig #1', location: 'London', description: "It's a gig barbara"},
      {date: '17AUG', name:'Gig #1', location: 'London', description: "It's a gig barbara"}
    ];
    this.setState({
      isLoading: true
    });

    setTimeout(()=>{
      this.setState({
        isLoaded: true
      });
      setTimeout(()=>{
        this.setState({
          isLoading: false,
          isLoaded: false,
          isFinished: true,
          events: events
        });
      }, 500);
    }, 2000);
  }

  componentDidMount(){
    this.fetchEvents();
  }

  render() {
    return (
      <div className='gig-list'>
        <Heading title={"Gigs"} subtitle={"See where I'm performing next!"}/>
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
