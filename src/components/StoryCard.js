import React from 'react';
import { Link } from 'react-router-dom';


function StoryCard (props) {

    const state = {
        storyID: props.id,
        url: props.url,
        title: props.title,
        hostname: props.hostname,
        points: props.points,
        username: props.username,
        time: props.time,
        numberOfComments: props.comments
    }


    return (
        <li id={props.id} className="content-container__storycard-list__story">
            <a href={props.url} target="_blank" rel="noopener noreferrer" className="content-container__storycard-list__story__title">
                {props.title}
            </a>

            <span className="content-container__storycard-list__story__url"> 
                { props.hostname ? ` (${props.hostname})` : '' }
            </span>

            <p className="content-container__storycard-list__info">
                {props.points} {props.points === 1 ? 'point' : 'points'} | by

                <Link to={{ pathname: '/user', state }}>
                    {props.username}
                </Link>
                <span>{props.time}</span>

                {props.comments >= 0 &&
                    <>
                        <span> | </span>
                        <Link to={{ pathname: '/comments', state }}>
                            {props.comments} {props.comments === 1 ? 'comment' : 'comments'}
                        </Link>
                    </>
                }
            </p>
        </li>
    )
}


export default StoryCard;