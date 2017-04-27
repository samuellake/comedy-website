import React, { Component } from 'react';
import './NewsItem.css';

class NewsItem extends Component {
  render() {
    return (
      <div className="news-item">
        <div className="news-item-title">
          "He's too good for NewsJack" - BBC
        </div>
        <div className="news-item-date">
          28/04/17
        </div>
        <img className="news-item-image" src="https://ichef.bbci.co.uk/images/ic/976x549_b/p03zbcmw.jpg"/>
        <p> Lorem ipsum minge minge minge Lorem ipsum minge minge mingeLorem ipsum minge minge mingeLorem ipsum minge minge mingeLorem ipsum minge minge mingeLorem ipsum minge minge minge</p>
      </div>
    );
  }
}

export default NewsItem;
