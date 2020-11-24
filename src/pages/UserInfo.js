import React , { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function UserInfo() {
    const userURL = 'https://hacker-news.firebaseio.com/v0/user/';

    const location = useLocation();

    const [links, setLinks] = useState({
        submissions: '',
        comments: ''
    });

    const [user, setUser] = useState({
        username: '',
        accountDate: '',
        karma: '',
        about: ''
    });
    const {username, accountDate, karma, about} = user;


    useEffect(() => {
        const username = location.state.username;
        getUserInfo(username)
        setLinks({
            submissions: `https://news.ycombinator.com/submitted?id=${username}`,
            comments: `https://news.ycombinator.com/threads?id=${username}`
        })
    }, [location]);

    
    const getAccountDate = (unixTime) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
        const dateObj = new Date(unixTime * 1000);
        const year = dateObj.getUTCFullYear();
        const month = months[dateObj.getUTCMonth()];
        const day = dateObj.getUTCDate();

        return `${month} ${day}, ${year}`;
    }


    const getUserInfo = (username) => {
        axios.get(`${userURL}${username}.json?print=pretty`)
            .then(res => {
                const {created, karma, about} = res.data;
                const accountDate = getAccountDate(created);

                if (about) {
                    setUser({ username, accountDate, karma, about });
                } else {
                    setUser({ username, accountDate, karma, about: '-' });
                }
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="userinfo-container">
            <ul className="userinfo-container__labels">
                <li className="userinfo-container__labels__item">Username:</li>
                <li className="userinfo-container__labels__item">Created:</li>
                <li className="userinfo-container__labels__item">Karma:</li>
                <li className="userinfo-container__labels__item">About:</li>
            </ul>
            <ul className="userinfo-container__entries">
                <li className="userinfo-container__entries__item">{username}</li>
                <li className="userinfo-container__entries__item">{accountDate}</li>
                <li className="userinfo-container__entries__item">{karma}</li>
                <li className="userinfo-container__entries__item" dangerouslySetInnerHTML={{ __html: about }}/>
                <li className="userinfo-container__entries__item">
                    <a href={links.submissions} target="_blank" rel="noopener noreferrer">submissions</a>
                    <span> | </span>
                    <a href={links.comments} target="_blank" rel="noopener noreferrer">comments</a>
                </li>
            </ul>
        </div>
    )
}

export default UserInfo;