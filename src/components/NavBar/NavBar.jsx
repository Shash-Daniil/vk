import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav">
            <div>
                <NavLink to='/profile'>profile</NavLink>
            </div>
            <div>
                <NavLink to='/news'>news</NavLink>
            </div>
            <div>
                <NavLink to='/messages'>messages</NavLink>
            </div>
            <div>
                <NavLink to='/communities'>communities</NavLink>
            </div>
            <div>
                <NavLink to='/users'>users</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;