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
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list__title">
                    <Link to='/' onClick={highlightTab}>
                        Modern H.N.
                    </Link>
                </li>
                <ul className="nav__list__items">
                    <li className={selectedTab === 'top' ? 'highlight' : ''}>
                        <Link to='/top' onClick={highlightTab}>top</Link>
                    </li>
                    <li className={selectedTab === 'new' ? 'highlight' : ''}>
                        <Link to='/new' onClick={highlightTab}>new</Link>
                    </li>
                    <li className={selectedTab === 'ask' ? 'highlight' : ''}>
                        <Link to='/ask' onClick={highlightTab}>ask</Link>
                    </li>
                    <li className={selectedTab === 'show' ? 'highlight' : ''}>
                        <Link to='/show' onClick={highlightTab}>show</Link>
                    </li>
                    <li className={selectedTab === 'jobs' ? 'highlight' : ''}>
                        <Link to='/jobs' onClick={highlightTab}>jobs</Link>
                    </li>
                </ul>
            </ul>
        </nav>
    )
}

export default Navbar;