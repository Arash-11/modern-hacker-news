import React , { useState , useEffect } from 'react';
import axios from 'axios';


function Comment ({someID}) {
    const baseURL = 'https://hacker-news.firebaseio.com/v0/item/';

    const [commentInfo, setCommentInfo] = useState([]);

    useEffect(() => {
        if (!someID) {
            console.log('nothing here', someID);
            return null;
        }
        axios.get(`${baseURL}${someID}.json?print=pretty`)
            .then(res => (
                setCommentInfo(res.data)
            ))
            .catch(error => console.log(error))

    }, [someID])


    const nestedComments = (commentInfo.kids || []).map(id => (
        <Comment key={commentInfo.kids.indexOf(id)} someID={id} />
    ))

    return (
        <div style={{"marginBottom": "20px"}}>
            <p key={commentInfo.id} dangerouslySetInnerHTML={{ __html: commentInfo.text }} />
            {nestedComments}
        </div>
    )

}

export default Comment;