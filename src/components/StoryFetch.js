import React , { useState , useEffect } from 'react';
import axios from 'axios';
import StoryCard from './StoryCard';

function StoryFetch(props) {
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
                const topStoryArray = res.data.slice(storyNumber - 30, storyNumber);
                topStoryArray.map(id => getStoryContent(id));
            })
            .catch(error => console.log(error));
        
        // clean up function, to remove previous 30 stories
        return setStories([]);
    }, [timesClicked]);


    const getStoryContent = id => {
        axios.get(`${props.storyURL}${id}.json?print=pretty`)
            .then(res => {
                const {id, title, url, score, by, time, descendants, kids} = res.data;
                const hostname = (new URL(url)).hostname;

                // convert UNIX time which is in seconds, to javascript which is in milliseconds
                const jsTime = new Date(time * 1000);
                const uploadTime = jsTime.getHours();
                const currentDate = new Date();
                const currentHour = currentDate.getHours();
                const timeDifference = `${currentHour - uploadTime} hours`;

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
            })
            .catch(error => console.log(error));
    }


    const getCommentIDs = (id) => {
        axios.get(`${props.storyURL}${id}.json?print=pretty`)
            .then(res => {
                const {kids} = res.data;
                kids.map(id => getComments(id));
            })
            .catch(error => console.log(error))
    }

    const getComments = (id) => {
        axios.get(`${props.storyURL}${id}.json?print=pretty`)
            .then(res => {
                const comments = res.data.text;
                // console.log(comments);
                props.showComments(comments);
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="content-container">
            <ol start={storyNumber - 29} className="content-container__storycard-list">
                {stories.map(story => {
                   return (
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
                            getCommentIDs={getCommentIDs}
                        />
                    )
                })}
            </ol>
            <button onClick={() => setTimesClicked(timesClicked + 1)} className="content-container__more-button">
                More
            </button>
        </div>
    )
}

export default StoryFetch;