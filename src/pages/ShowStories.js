import React from 'react';
import StoryFetch from '../components/StoryFetch';

function ShowStories() {
    const showStoryURL = 'https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty';
    return <StoryFetch baseURL={showStoryURL} />
}

export default ShowStories;