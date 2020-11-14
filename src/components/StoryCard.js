import React from 'react';

function StoryCard(props) {

    return (
        <li className="content-container__storycard-list__story">
            <a href={props.url} className="content-container__storycard-list__story__title">
                {props.title}
            </a>
            <span className="content-container__storycard-list__story__url"> ({props.hostname})</span>
            <p className="content-container__storycard-list__info">
                {props.points} points by<a href="">{props.username}</a><a href="">{props.time}</a> |
                <a href="">{props.comments} comments</a>
            </p>
        </li>
    )
}

export default StoryCard;