import React from 'react';
import { Link } from 'react-router-dom';


function CommentPageHeading (props) {
    return (
        <div id={props.id} className="comment-title__container">
            <a href={props.url} className="comment-title__container__title">
                {props.title}
            </a>

            <span className="comment-title__container__url"> 
                { props.hostname ? ` (${props.hostname})` : '' }
            </span>

            <p className="comment-title__container__info">
                {props.points} points | by

                <Link to={{ pathname: '/user', state: {userID: props.username} }}>
                    {props.username}
                </Link>
                <span>{props.time} ago </span>
                    | {props.comments} {props.comments === 1 ? 'comment' : 'comments'}
            </p>
        </div>
    )
}

export default CommentPageHeading;