import React , { useState , useEffect } from 'react';
import axios from 'axios';
import StoryCard from './StoryCard';


function StoryFetch(props) {

    // this endpoint will be used for 'top' & 'new' stories, and comments
    const storyURL = 'https://hacker-news.firebaseio.com/v0/item/';

    // to store information for each story shown on main page
    const [stories, setStories] = useState([]);

    // keep track of number of times the "show more" button is clicked.
    // This will be used to determine which 30 stories to show.
    const [timesClicked, setTimesClicked] = useState(1);
    const storyNumber = 30 * timesClicked;


    useEffect(() => {
        axios.get(props.baseURL)
            .then(res => {
                // only get the top 30 stories at a time to show on a page
                const storiesArray = res.data.slice(storyNumber - 30, storyNumber);
                storiesArray.map(id => getStoryContent(id));
            })
            .catch(error => console.log(error));
        
        // clean up function, to remove previous 30 stories
        return setStories([]);
    }, [timesClicked]);


    const getStoryContent = id => {
        axios.get(`${storyURL}${id}.json?print=pretty`)
            .then(res => {
                const {id, title, url, score, by, time, descendants} = res.data;

                // convert UNIX time which is in seconds, to javascript which is in milliseconds
                const jsTime = new Date(time * 1000);
                const uploadTime = jsTime.getHours();
                const currentDate = new Date();
                const currentHour = currentDate.getHours();
                const timeDifference = `${currentHour - uploadTime} hours`;

                if (url) {
                    const hostname = new URL(url).hostname;
                    setStories(previousStories => {
                        return [
                            ...previousStories,
                            {
                                id,
                                title,
                                url,
                                hostname,
                                points: score,
                                username: by,
                                time: timeDifference,
                                numberOfComments: descendants
                            }
                        ]
                    })
                }
                else {
                    setStories(previousStories => {
                        return [
                            ...previousStories,
                            {
                                id,
                                title,
                                points: score,
                                username: by,
                                time: timeDifference,
                                numberOfComments: descendants
                            }
                        ]
                    })
                }
                
            })
            .catch(error => console.log(error));
    }


    return (
        <div className="content-container">
            <ol start={storyNumber - 29} className="content-container__storycard-list">
                {stories.map(story => (
                    <StoryCard
                        key={story.id}
                        id={story.id}
                        title={story.title}
                        url={story.url}
                        hostname={story.hostname}
                        points={story.points}
                        username={story.username}
                        time={story.time}
                        comments={story.numberOfComments}
                    />
                ))}
            </ol>
            <button onClick={() => setTimesClicked(timesClicked + 1)} className="content-container__more-button">
                More
            </button>
        </div>
    )
}

export default StoryFetch;