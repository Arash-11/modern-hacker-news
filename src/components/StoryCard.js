import React from 'react';
import { Link } from "react-router-dom";

function StoryCard (props) {
    return (
        <li id={props.id} className="content-container__storycard-list__story">
            <a href={props.url} className="content-container__storycard-list__story__title">
                {props.title}
            </a>

            <span className="content-container__storycard-list__story__url"> ({props.hostname})</span>
            
            <p className="content-container__storycard-list__info">
                {props.points} points by<a href="">{props.username}</a><span>{props.time} ago</span> |
                <Link to="/storycomments" onClick={() => props.getCommentIDs(props.id)}>
                    {props.comments} {props.comments === 1 ? 'comment' : 'comments'}
                </Link>
            </p>
        </li>
    )
}

export default StoryCard;