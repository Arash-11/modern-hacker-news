import React from 'react';
import StoryFetch from '../components/StoryFetch';


export function TopStories() {
    const topStoryBaseURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    return <StoryFetch baseURL={topStoryBaseURL} />
}


export function NewStories() {
    const newStoryBaseURL = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';
    return <StoryFetch baseURL={newStoryBaseURL} />
}


export function AskStories() {
    const askStoryURL = 'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty';
    return <StoryFetch baseURL={askStoryURL} />
}


export function ShowStories() {
    const showStoryURL = 'https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty';
    return <StoryFetch baseURL={showStoryURL} />
}


export function Jobs() {
    const jobsURL = 'https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty';
    return <StoryFetch baseURL={jobsURL} />
}