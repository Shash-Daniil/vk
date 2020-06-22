import React from 'react';
import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
        <div className={s.dialog_item}>
            <div>
                <img className={s.imgee} src={props.img} />
            </div>
            <NavLink to={"/messages/" + props.id} >{props.name}</NavLink>
        </div>
    );
}

export default Dialog