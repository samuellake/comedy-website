import React, { Component } from 'react';
import './NewsFeed.css';

import Heading from '../Heading/Heading';
import NewsItem from '../NewsItem/NewsItem';

class NewsFeed extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stories: [],
      isLoading: false,
      isLoaded: false,
      isFinished: false
    };
  }

  renderStories(stories) {
    //date,name,location, description
    return stories.map((story, index) => {
      return <NewsItem {...story} key={index}/>
    });
  }

  fetchStories() {

    const url = `${process.env.REACT_APP_CMS_URL}/posts`;

    this.setState({
      isLoading: true
    });

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((stories)=> {
        console.log("!!!!!!!!",stories);
        let posts = [];
        stories.posts.map((story) => {
          posts.push({
            date: story.publishedDate,
            title: story.title,
            image: story.image.url,
            body: story.content.extended
          });
        })
        //animation
        this.setState({
          isLoaded: true
        });
        setTimeout(()=>{
          this.setState({
            isLoading: false,
            isLoaded: false,
            isFinished: true,
            stories: posts
          });
        }, 500);
        console.log(posts);
      });
  }

  componentDidMount(){
    this.fetchStories();
  }

  render() {

    const stories = this.state.stories;

    return (
      <div className="news">
        <div className="news-items">
          {this.renderStories(this.state.stories)}
        </div>
      </div>
    );
  }
}

export default NewsFeed;
