import React , { useState } from 'react';
import StoryFetch from '../components/StoryFetch';

function SpecificComments() {
    const topStoryBaseURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    const topStoriesURL = 'https://hacker-news.firebaseio.com/v0/item/';

    // to store comments
    const [comments, setComments] = useState([]);

    const showComments = (comments) => {
        console.log('we here baby');
        setComments(previousComments => {
            return [...previousComments, comments]
        })
    }

    return (
        <>
            <StoryFetch showComments={showComments} />
            <ul>
                {comments.map(comment => {
                    <li>{comment}</li>
                })}
            </ul>
        </>
    )
}

export default SpecificComments;