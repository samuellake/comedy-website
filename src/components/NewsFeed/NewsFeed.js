import React, { Component } from 'react';
import './NewsFeed.css';

import Heading from '../Heading/Heading';
import NewsItem from '../NewsItem/NewsItem';

class NewsFeed extends Component {

  render() {

    const stories = this.props.stories;

    return (
      <div className="news">
        <div className="news-items">
          {stories.map((story, index) => {
            return <NewsItem {...story} key={index}/>
          })}
        </div>
      </div>
    );
  }
}

export default NewsFeed;
