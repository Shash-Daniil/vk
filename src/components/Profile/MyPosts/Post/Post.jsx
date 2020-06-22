import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img className={s.image} src="https://img.icons8.com/dusk/64/000000/monster-face.png"/>
            <br></br><span>{props.postText}</span><br></br>
            <button>
            <img className={s.likeBtn} src="https://img.icons8.com/pastel-glyph/64/000000/facebook-like.png"/>
            </button>
            <span className={s.likesNum}> {props.likes}</span>
        </div>
    );
}

export default Post;