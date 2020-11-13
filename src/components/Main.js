import React , { useState , useEffect } from 'react';
import axios from 'axios';

function Main() {
    const baseURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    const storyURL = 'https://hacker-news.firebaseio.com/v0/item/';

    // to store IDs for the top stories that are going to be shown on main page
    const [storyIDs, setStoryIds] = useState([]);

    // to store information for each story shown on main page
    const [stories, setStories] = useState({
        id: '',
        title: '',
        url: '',
        points: '',
        username: '',
        time: '',
        numberOfComments: ''
    });


    // useEffect(() => {
    //     axios.get(`${storyURL}25057288.json?print=pretty`)
    //         .then(res => {
    //             const title = res.data.title;
    //             console.log(title);
    //         })
    //         .catch(error => console.log(error));
    // }, []);

    axios.get(baseURL)
        .then(res => {
            res.data.length = 5; // only get the top 30 stories for the first page
            setStoryIds(res.data);
            storyIDs.map(id => {
                getStoryContent(id);
            })
        })
        .catch(error => console.log(error));


    const getStoryContent = id => {
        axios.get(`${storyURL}${id}.json?print=pretty`)
            .then(res => {
                console.log(res);
                setStories({
                    title: res.data.title,
                    url: res.data.url,
                    points: res.data.score,
                    username: res.data.by,
                    time: res.data.time,
                    numberOfComments: res.data.descendants
                })
            })
            .catch(error => console.log(error));
    }


    return (
        <ul>
            {stories.map(story => {
                return <li key={story.id}>{story.title}</li>
            })}
        </ul>
    )
}

export default Main;


// top stories for main page
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

// how to query for item for the main page
// https://hacker-news.firebaseio.com/v0/item/25057288.json?print=pretty