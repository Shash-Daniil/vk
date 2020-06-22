import React from 'react';
import s from './News.module.css';
import FeedNavbar from './FeedNavbar/FeedNavbar'

let postref = React.createRef();

const FeedPost = (props) => {
    return (
        <div className={s.post}>
            <span>Post #{props.id}</span>
            <br></br>
            <span>{props.content}</span>
            <img className={s.postimg} src={props.img} />
        </div>
    );
}

const News = (props) => {
    let newarray = props.postNews.map( elem => <FeedPost id={elem.id} content={elem.content} img={elem.img}/> )

    let postOnChange = () => {
        let jopa = postref.current.value;
        props.postChange(jopa);
    }

    let addPost = () => {
        props.postAdd();
    }

    return (
        <div className={s.main}>
            <div className={s.setfed}>
                <span>Чо нового?</span><br></br>
                <textarea onChange={postOnChange} ref={postref} value={props.postText}/>
                <button onClick={addPost}>Опубликовать</button>
            </div>
            <div className={s.content}>
                {newarray}
            </div>
            <FeedNavbar />
        </div>
    );
}

export default News;