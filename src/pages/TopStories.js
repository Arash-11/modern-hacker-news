import React from 'react';
import StoryFetch from '../components/StoryFetch';

function TopStories() {
    const topStoryBaseURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    return <StoryFetch baseURL={topStoryBaseURL} />
}

export default TopStories;