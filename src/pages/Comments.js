import React , { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CommentHeading from '../components/CommentHeading';

function Comments () {
    const storyURL = 'https://hacker-news.firebaseio.com/v0/item/';

    const [story, setStory] = useState({});

    const [comment, setComment] = useState();

    const location = useLocation();


    useEffect(() => {
        const {storyID, url, title, hostname, points, username, time, numberOfComments} = location.state;
        setStory({storyID, url, title, hostname, points, username, time, numberOfComments});

        axios.get(`${storyURL}${storyID}.json?print=pretty`)
            .then(res => {
                const commentIDs = res.data.kids;
                commentIDs.map(id => getComments(id));
            })
            .catch(error => console.log(error))

    }, [location]);


    const getComments = (id) => {
        axios.get(`${storyURL}${id}.json?print=pretty`)
            .then(res => {
                console.log(res);
                const {by, time, text} = res.data;
                setComment(prevComments => {
                    return {
                        ...prevComments,
                        by,
                        time,
                        text
                    }
                });
            })
            .catch(error => console.log(error))
    }


    return (
        <>
            <CommentHeading
                title={story.title}
                url={story.url}
                hostname={story.hostname}
                points={story.points}
                username={story.username}
                time={story.time}
                comments={story.numberOfComments}
            />
        </>
    )
}

export default Comments;