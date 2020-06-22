import React from 'react';
import s from './Communities.module.css'
import * as axios from 'axios';

let Communities = (props) => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        debugger;
        console.log("fuck");
    });
    return (
        <div>
            {props.communities.map( elem => 
                <div className={s.commWrapp} key={elem.id}>
                    <div>
                        <img className={s.commPhoto} src={elem.photoUrl}/>
                    </div>
                    <div>
                        {elem.isFollow ? <button onClick={ () => { props.unfollow(elem.id) }}>unfollow</button> : <button onClick={ () => { props.follow(elem.id) }}>follow</button>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Communities;