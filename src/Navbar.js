import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list__title">
                    <Link to='/'>Modern Hacker News</Link>
                </li>
                <ul className="nav__list__items">
                    <li><Link to='/new'>new</Link></li>
                    <li><Link to='/'>past</Link></li>
                    <li><Link to='/'>comments</Link></li>
                    <li><Link to='/'>show</Link></li>
                    <li><Link to='/'>ask</Link></li>
                    <li><Link to='/'>jobs</Link></li>
                </ul>
            </ul>
        </nav>
    )
}

export default Navbar;