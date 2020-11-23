import React , { useState , useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import getTimeDetails from './TimeDifference';


function Comment ({commentID, depth = 0}) {
    const baseURL = 'https://hacker-news.firebaseio.com/v0/item/';

    const [commentInfo, setCommentInfo] = useState([]);


    useEffect(() => {
        if (!commentID) {
            return null;
        }
        axios.get(`${baseURL}${commentID}.json?print=pretty`)
            .then(res => setCommentInfo(res.data))
            .catch(error => console.log(error))

    }, [commentID])


    const nestedComments = (commentInfo.kids || []).map(id => (
        <Comment key={id} commentID={id} depth={depth + 1} />
    ))


    return (
        <>
            <div style={{marginLeft: depth * 50}} className={`comments-container__comment ${depth === 0 && ' separate-comment'}`}>
                <p className="comments-container__comment__heading">
                    <span>{commentInfo.by}</span>
                    <span>{getTimeDetails(commentInfo.time)}</span>
                </p>                
                <p
                    key={commentInfo.id}
                    dangerouslySetInnerHTML={{ __html: commentInfo.text }}
                    className="comments-container__comment__body"
                />
            </div>
            {nestedComments}
        </>
    )

}

export default Comment;