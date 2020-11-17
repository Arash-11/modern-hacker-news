import React , { useState , useEffect } from 'react';
import axios from 'axios';
import StoryFetch from '../components/StoryFetch';
import StoryComments from '../components/StoryComments';

function TopStories() {
    const topStoryBaseURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

    // to determine if comments should be shown or not
    // const [areCommentsShown, setAreCommentsShown] = useState(false);

    // const getCommentIDs = (id) => {
    //     setAreCommentsShown(!areCommentsShown);

    //     axios.get(`${storyURL}${id}.json?print=pretty`)
    //         .then(res => {
    //             const {kids} = res.data;
    //             kids.map(id => getComments(id));
    //         })
    //         .catch(error => console.log(error))
    // }


    // const getComments = (id) => {
    //     axios.get(`${storyURL}${id}.json?print=pretty`)
    //         .then(res => {
    //             const comment = res.data.text;
    //             comments.push(comment);
    //             console.log(...comments);
    //         })
    //         .catch(error => console.log(error))
    // }

    return (
        <>
            <StoryFetch baseURL={topStoryBaseURL} />
        </>
    )
}

export default TopStories;


// {areCommentsShown
//     ? 
//     <ul>
//         {comments.map(item => {
//             <li>{item}</li>
//         })}
//     </ul>
//     : 
//     <StoryFetch baseURL={topStoryBaseURL} findCommentIDs={getCommentIDs} />
// }