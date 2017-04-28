import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component {

  static propTypes() {
    return {
      label: React.PropTypes.string.isRequired,
      children: React.PropTypes.element.isRequired
    };
  }

  render() {
    return (
      <div className="tab">
        {this.props.children}
      </div>
    );
  }
}

export default Tab;
