import React , { useState } from 'react';
import axios from 'axios';
import StoryFetch from '../components/StoryFetch';
import StoryComments from '../components/StoryComments';

function TopStories() {
    const topStoryBaseURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    const storyURL = 'https://hacker-news.firebaseio.com/v0/item/';

    // to determine if comments should be shown or not
    const [areCommentsShown, setAreCommentsShown] = useState(false);

    const [comments, setComments] = useState([]);

    const getCommentIDs = (id) => {
        setAreCommentsShown(!areCommentsShown);

        axios.get(`${storyURL}${id}.json?print=pretty`)
            .then(res => {
                const {kids} = res.data;
                kids.map(id => getComments(id));
            })
            .catch(error => console.log(error))
    }


    const getComments = (id) => {
        axios.get(`${storyURL}${id}.json?print=pretty`)
            .then(res => {
                const comment = res.data.text;
                setComments(previousComments => {
                    return [...previousComments, comment];
                });
                console.log(comment);
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            {areCommentsShown
                ? 
                <ul>
                    {comments.map(comment => {
                        <StoryComments comment={comment} />
                    })}
                </ul>
                : 
                <StoryFetch baseURL={topStoryBaseURL} findCommentIDs={getCommentIDs} />
            }
        </>
    )
}

export default TopStories;