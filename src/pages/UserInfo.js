import React , { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function UserInfo() {
    const location = useLocation();

    // const [userIDState, setUserIDState] = useState();

    useEffect(() => {
        // setUserIDState(props.)
        console.log('useffect is in effect', location.state.userID);
    }, [])

    return (
        <h3>Here is the user's info</h3>
    )
}

export default UserInfo;