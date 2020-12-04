import React , { useState , useEffect } from 'react';
import { Link } from "react-router-dom";


function Navbar() {

    const [selectedTab, setSelectedTab] = useState();

    const styling = {fontWeight: '600', color: 'white', opacity: '1'};

    useEffect(() => {
        const tab = (window.location.pathname).slice(1);
        setSelectedTab(tab);
    }, [])

    const highlightTab = (event) => {
        const tab = event.target.innerText;
        setSelectedTab(tab);
    }


    return (
        <header className="header">
            <nav className="header__nav">
                <Link to='/' onClick={highlightTab} className="header__nav__title"> HN </Link>
                <div className="header__nav__items">
                    <Link to='/top' onClick={highlightTab} style={selectedTab === 'top' ? styling : {color: ''}}>
                        top
                    </Link>
                    <Link to='/new' onClick={highlightTab} style={selectedTab === 'new' ? styling : {color: ''}}>
                        new
                    </Link>
                    <Link to='/ask' onClick={highlightTab} style={selectedTab === 'ask' ? styling : {color: ''}}>
                        ask
                    </Link>
                    <Link to='/show' onClick={highlightTab} style={selectedTab === 'show' ? styling : {color: ''}}>
                        show
                    </Link>
                    <Link to='/jobs' onClick={highlightTab} style={selectedTab === 'jobs' ? styling : {color: ''}}>
                        jobs
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;