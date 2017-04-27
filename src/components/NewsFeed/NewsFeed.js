import React, { Component } from 'react';
import './NewsFeed.css';

import Heading from '../Heading/Heading';
import NewsItem from '../NewsItem/NewsItem';

class NewsFeed extends Component {
  render() {
    return (
      <div className="news">
        <Heading title={"News"} subtitle={"What the latest with Big S"}/>
        <div className="news-items">
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </div>
    );
  }
}

export default NewsFeed;
