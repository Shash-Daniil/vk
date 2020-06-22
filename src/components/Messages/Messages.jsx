import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog'
import DialogMessages from './Dialog/DialogMessages/DialogMessages'

let misage = React.createRef()

const Messages = (props) => {
    let addMessage = () => {
        props.postAdd();
    }

    let newDialogData = props.dialogPerson.map( elem => <Dialog name={elem.name} img={elem.img} id={elem.id} /> )
 
    let dialog_messages = props.message.map( elem => <DialogMessages message={elem.message} />)

    let postOnChange = () => {
        let val = misage.current.value;
        props.postChange(val);
    }
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                {newDialogData}
            </div>
            <div className={s.message}>
                {dialog_messages}
                <textarea onChange={postOnChange} ref={misage} value={props.newMessageText}/>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}

export default Messages;