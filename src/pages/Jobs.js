import React from 'react';
import StoryFetch from '../components/StoryFetch';

function Jobs() {
    const jobsURL = 'https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty';
    return (
        <StoryFetch baseURL={jobsURL} />
    )
}

export default Jobs;