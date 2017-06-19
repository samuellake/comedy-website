import React, { Component } from 'react';
import moment from 'moment';
import './NewsItem.css';

class NewsItem extends Component {

  render() {

    const {title, date, image, body} = this.props;

    return (
      <div className="news-item">
        <div className="news-item-title">
          {title}
        </div>
        <div className="news-item-date">
          {moment(date).format("DD MMM 'YY")}
        </div>
        <img className="news-item-image" src={image}/>
        <p>{body}</p>
      </div>
    );
  }
}

export default NewsItem;
