import React, { Component, PropTypes } from 'react';
import './TabContainer.css';

import Tab from '../Tab/Tab';

class TabContainer extends Component {

  static propTypes() {
    return {
      selected: PropTypes.number,
      children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
      ]).isRequired
    };
  }

  constructor(props) {
		super(props);

		this.state ={
			selected: 0,
      classes: "tabs"
		};
	}

  handleClick(index, event) {
    event.preventDefault();
    if(index !== this.state.selected ){
      this.setState({
        classes: "tabs deselected"
      });

      setTimeout(function() { this.setState({selected: index, classes: "tabs selected"}); }.bind(this), 250);
    }
  }

  renderTitles() {
    const tabs = this.props.children;
    return (
      <ul className="tabs__labels">
        {tabs.map((tab, index) =>{
          const classes = (index === this.state.selected) ? "selected" : "";
          return(
            <li key={index} className={classes}>
              <a href="#"
                className={""}
                onClick={this.handleClick.bind(this, index)}>
                {tab.props.label}
              </a>
            </li>
          )
        })
        }
      </ul>
    );
  }

  renderContent(){
    return(
      <div className={this.state.classes}>
        {this.props.children[this.state.selected]}
      </div>
    )
  }

  render() {
    return (
      <div className="tab-container">
        {this.renderTitles()}
        {this.renderContent()}
      </div>
    )
  }
}

export default TabContainer;
