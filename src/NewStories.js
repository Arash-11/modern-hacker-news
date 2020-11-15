import React from 'react';
import StoryFetch from './components/StoryFetch';

function NewStories() {
    const newStoryURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    const storyURL = 'https://hacker-news.firebaseio.com/v0/item/';
    
    return (
        <StoryFetch
            baseURL = {newStoryURL}
            secondaryURL = {storyURL}
        />
    )
}

export default NewStories;