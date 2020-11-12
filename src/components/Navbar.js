import React from 'react';

function Navbar() {

    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list__first-item">Modern Hacker News</li>
                <li>new</li>
                <li>past</li>
                <li>comments</li>
                <li>show</li>
                <li>ask</li>
                <li>jobs</li>
                <li>submit</li>
                <li className="nav__list__last-item">login</li>
            </ul>
        </nav>
    )
}

export default Navbar;