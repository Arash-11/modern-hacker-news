import React , { useState , useEffect } from 'react';
import axios from 'axios';

function TopStories() {
    const baseURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    const storyURL = 'https://hacker-news.firebaseio.com/v0/item/';

    // keep track of number of times the "show more" button is clicked.
    // This will be used to determine which 30 stories to show.
    const [timesClicked, setTimesClicked] = useState(1);

    // to store information for each story shown on main page
    const [stories, setStories] = useState([]);

    useEffect(() => {
        axios.get(baseURL)
            .then(res => {
                // only get the top 30 stories at a time to show on a page
                const storyNumber = 30 * timesClicked;
                const newArr = res.data.slice(storyNumber - 30, storyNumber);
                newArr.map(id => getStoryContent(id));
            })
            .catch(error => console.log(error));
        
        // clean up function to remove previous 30 stories
        return setStories([]);
    }, [timesClicked]);


    const getStoryContent = id => {
        axios.get(`${storyURL}${id}.json?print=pretty`)
            .then(res => {
                const {id, title, url, score, by, time, descendants} = res.data;
                setStories(prevValues => {
                    return [
                        ...prevValues,
                        {
                            id,
                            title,
                            url,
                            points: score,
                            username: by,
                            time: time,
                            numberOfComments: descendants
                        }
                    ]
                })
            })
            .catch(error => console.log(error));
    }


    return (
        <div>
            <ul>
                {stories.map(story => {
                    return <li key={story.id}>{story.title}</li>
                })}
            </ul>
            <button onClick={() => setTimesClicked(timesClicked + 1)}>More</button>
        </div>
    )
}

export default TopStories;


// top stories for main page
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

// how to query for item for the main page
// https://hacker-news.firebaseio.com/v0/item/25057288.json?print=pretty