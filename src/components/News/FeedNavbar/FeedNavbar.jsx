import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import s from './../News.module.css'

const FeedNavbar = (props) => {
    return (
        <BrowserRouter>
            <div className={s.navbar}>
                <NavLink to="/new">News</NavLink>
                <div>Recomendations</div>
                <div>Liked</div>
            </div>
        </BrowserRouter>
    );
}

export default FeedNavbar;