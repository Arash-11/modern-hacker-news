import React , { useState , useEffect } from 'react';
import { Link } from "react-router-dom";


function Navbar() {

    const [selectedTab, setSelectedTab] = useState();

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
                    <Link to='/top' onClick={highlightTab} className={selectedTab === 'top' ? 'highlight' : ''}>
                        top
                    </Link>
                    <Link to='/new' onClick={highlightTab} className={selectedTab === 'new' ? 'highlight' : ''}>
                        new
                    </Link>
                    <Link to='/ask' onClick={highlightTab} className={selectedTab === 'ask' ? 'highlight' : ''}>
                        ask
                    </Link>
                    <Link to='/show' onClick={highlightTab} className={selectedTab === 'show' ? 'highlight' : ''}>
                        show
                    </Link>
                    <Link to='/jobs' onClick={highlightTab} className={selectedTab === 'jobs' ? 'highlight' : ''}>
                        jobs
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;