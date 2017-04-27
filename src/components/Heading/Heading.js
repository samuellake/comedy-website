import React, { Component } from 'react';
import './Heading.css';

class Heading extends Component {
  render() {

    let {title, subtitle} = this.props;

    return (
      <div className="heading">
        <div className="heading-title"> {title} </div>
        <div className="heading-subtitle"> {subtitle} </div>
      </div>
    );
  }
}

export default Heading;
