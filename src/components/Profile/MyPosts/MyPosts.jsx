import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostActionCreator, addPostActionCreator } from '../../../redux/profile-reducer'

const MyPosts = (props) => {

    let postList = props.profilePage.posts.map ( elem => <Post postText={elem.postText} likes={elem.likes} />)

    let postTextOnChange = (e) => {
        let tmp = e.target.value;
        props.dispatch(updateNewPostActionCreator(tmp));
    }

    let addPost = (e) => {
        debugger;
        let text = props.profilePage.newPostText;
        props.dispatch(addPostActionCreator(text));
        props.dispatch(updateNewPostActionCreator(''));
    }

    return (
        <div>
            <div>
                <textarea value={props.profilePage.newPostText} onChange={postTextOnChange} placeholder="ENTER TEXT HERE!!" ></textarea>
                <button onClick={addPost}>Create</button>
            </div>
            <div>
                {postList}
            </div>
        </div>
    );
}

export default MyPosts;