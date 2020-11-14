import React from 'react';

function Navbar() {

    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list__title">Modern Hacker News</li>
                <ul className="nav__list__items">
                    <li><a href="">new</a></li>
                    <li><a href="">past</a></li>
                    <li><a href="">comments</a></li>
                    <li><a href="">show</a></li>
                    <li><a href="">ask</a></li>
                    <li><a href="">jobs</a></li>
                </ul>
            </ul>
        </nav>
    )
}

export default Navbar;