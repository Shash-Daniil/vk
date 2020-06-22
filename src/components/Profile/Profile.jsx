import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div>
            <img className={classes.profileImage} src="https://shapka-youtube.ru/wp-content/uploads/2018/10/anime-category.jpg" />
            <div>
                avatar + descript
            </div>
            <div>
                <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
            </div>
        </div>
    );
}

export default Profile;
