import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component {

  static propTypes() {
    return {
      label: React.PropTypes.string.isRequired,
      children: React.PropTypes.element.isRequired,
      selected: React.PropTypes.bool,
    };
  }

  render() {
    const classes = this.props.selected === true ? "tab selected" : "tab";
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default Tab;
