import React from 'react';
import StoryFetch from '../components/StoryFetch';

function AskStories() {
    const askStoryURL = 'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty';
    return <StoryFetch baseURL={askStoryURL} />
}

export default AskStories;