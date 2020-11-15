import React from 'react';
import StoryFetch from '../components/StoryFetch';

function TopStories() {
    const topStoryBaseURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    const topStoriesURL = 'https://hacker-news.firebaseio.com/v0/item/';

    return (
        <StoryFetch
            baseURL = {topStoryBaseURL}
            storyURL = {topStoriesURL}
        />
    )
}

export default TopStories;