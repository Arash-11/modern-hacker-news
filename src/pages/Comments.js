import React , { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CommentHeading from '../components/CommentHeading';

function Comments () {
    const storyURL = 'https://hacker-news.firebaseio.com/v0/item/';

    const [story, setStory] = useState({});

    const [comments, setComments] = useState([]);

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
                const {id, by, time, text} = res.data;
                setComments(prevComments => {
                    return [
                        ...prevComments,
                        {
                            id,
                            by,
                            time,
                            text
                        }
                    ]
                });
            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <CommentHeading
                title={story.title}
                url={story.url}
                hostname={story.hostname}
                points={story.points}
                username={story.username}
                time={story.time}
                comments={story.numberOfComments}
            />
            <ul>
                {comments.map(comment => {
                    return (
                        <li 
                            key={comment.id} 
                            className="comment-item" 
                            dangerouslySetInnerHTML={{ __html: comment.text }}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default Comments;