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
			selected: 0
		};
	}

  handleClick(index, event) {
    event.preventDefault();
    console.log(index);
    this.setState({
      selected: index
    });
  }

  renderTitles() {
    const tabs = this.props.children;
    tabs.map((tab, index) =>{
      return(
        <li key={index}>
          <a href="#"
            className={""}
            onClick={this.handleClick.bind(this, index)}>
            {tab.props.label}
          </a>
        </li>
      )
    });

    return (
      <ul className="tabs__labels">
        {tabs.map((tab, index) =>{
          return(
            <li key={index}>
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
    console.log(this.props.children[this.state.selected]);

    return(
      <div className="tabs">
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
