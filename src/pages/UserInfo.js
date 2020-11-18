import React , { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function UserInfo() {
    const userURL = 'https://hacker-news.firebaseio.com/v0/user/';

    const location = useLocation();

    const [user, setUser] = useState({
        username: '',
        created: '',
        karma: '',
        about: ''
    });
    const {username, created, karma, about} = user;

    useEffect(() => {
        getUserInfo(location.state.userID);
    }, [location]);

    const getUserInfo = (username) => {
        axios.get(`${userURL}${username}.json?print=pretty`)
            .then(res => {
                const {created, karma, about} = res.data;

                if (about) {
                    setUser({ username, created, karma, about });
                } else {
                    setUser({ username, created, karma, about: '-' });
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="userinfo-container">
            <ul className="userinfo-container__labels">
                {/* <ul> */}
                    <li className="userinfo-container__labels__item">Username:</li>
                    <li className="userinfo-container__labels__item">Account created on:</li>
                    <li className="userinfo-container__labels__item">Karma:</li>
                    <li className="userinfo-container__labels__item">About:</li>
                {/* </ul> */}
            </ul>
            <ul className="userinfo-container__entries">
                {/* <ul> */}
                    <li className="userinfo-container__entries__item">{username}</li>
                    <li className="userinfo-container__entries__item">{created}</li>
                    <li className="userinfo-container__entries__item">{karma}</li>
                    <li className="userinfo-container__entries__item">{about}</li>
                {/* </ul> */}
            </ul>
        </div>
    )
}

export default UserInfo;