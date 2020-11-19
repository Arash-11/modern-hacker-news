import React from 'react';
import StoryFetch from '../components/StoryFetch';

function NewStories() {
    const newStoryBaseURL = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';
    return <StoryFetch baseURL={newStoryBaseURL} />
}

export default NewStories;