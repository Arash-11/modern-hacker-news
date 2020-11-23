import React , { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CommentPageHeading from '../components/CommentPageHeading';
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
            <CommentPageHeading
                title={story.title}
                url={story.url}
                hostname={story.hostname}
                points={story.points}
                username={story.username}
                time={story.time}
                comments={story.numberOfComments}
            />
            <div className="comments-container">
                {commentIDs != null
                    ?   commentIDs.map(item => (
                            <Comment key={item} commentID={item} />
                        ))
                    :   <p className="comments-container__no-comment">No comments yet.</p>
                }
            </div>
        </> 
    )
}

export default CommentsPage;