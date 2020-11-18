import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function StoryComments () {
    const userURL = 'https://hacker-news.firebaseio.com/v0/user/';

    const location = useLocation();

    return (
        <h3>you will see comments here</h3>
    )
}

export default StoryComments;