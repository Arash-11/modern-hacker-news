import React from 'react';
import { Link } from 'react-router-dom';

function StoryCard (props) {
    return (
        <li id={props.id} className="content-container__storycard-list__story">
            <a href={props.url} className="content-container__storycard-list__story__title">
                {props.title}
            </a>

            <span className="content-container__storycard-list__story__url"> 
                { props.hostname ? ` (${props.hostname})` : '' }
            </span>

            <p className="content-container__storycard-list__info">
                {props.points} points by

                <Link to={{ pathname: '/user', state: {userID: props.username} }}>
                    {props.username}
                </Link>
                <span>{props.time} ago</span>

                {props.comments >= 0 &&
                <Link to={{ pathname: '/storycomments', state: {storyID: props.id} }}>
                    | {props.comments} {props.comments === 1 ? 'comment' : 'comments'}
                </Link>}
            </p>
        </li>
    )
}

export default StoryCard;