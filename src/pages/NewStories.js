import React from 'react';
import StoryFetch from '../components/StoryFetch';

function NewStories() {
    const newStoryBaseURL = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';
    const newStoriesURL = 'https://hacker-news.firebaseio.com/v0/item/';

    return (
        <StoryFetch
            baseURL={newStoryBaseURL}
            storyURL={newStoriesURL}
        />
    )
}

export default NewStories;