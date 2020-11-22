import React , { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CommentHeading from '../components/CommentHeading';
import Comment from '../components/Comment';


function CommentsPage() {
    const baseURL = 'https://hacker-news.firebaseio.com/v0/item/';

    const location = useLocation();

    const [story, setStory] = useState({});

    const [commentIDs, setCommentIDs] = useState([]);


    useEffect(() => {
        const {storyID, url, title, hostname, points, username, time, numberOfComments} = location.state;
        setStory({storyID, url, title, hostname, points, username, time, numberOfComments});

        axios.get(`${baseURL}${storyID}.json?print=pretty`)
            .then(res => {
                const mainCommentIDs = res.data.kids;
                return setCommentIDs(mainCommentIDs);
            })
            .catch(error => console.log(error))

    }, [location]);


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
            <div>
                {commentIDs.map(item => (
                    <Comment key={commentIDs.indexOf(item)} someID={item} />
                ))}
            </div>
        </> 
    )
}

export default CommentsPage;