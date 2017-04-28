import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-item"><a> HOME </a></div>
        <div className="nav-item"><a> NEWS </a></div>
        <div className="nav-item"><a> GIGS </a></div>
        <div className="nav-item"><a> CONTACT </a></div>
      </div>
    );
  }
}

export default Nav;
