import React from 'react';
import Messages from './Messages';
import { addMessageActionCreator,  updateNewMessageActionCreator} from '../../redux/messages-reducer'
import { connect } from 'react-redux';



let f1 = (state) => {
    return {
        dialogPerson: state.messagePage.dialogPerson,
        message: state.messagePage.messages,
        newMessageText: state.messagePage.newMessageText
    }
}

let f2 = (dispatch) => {
    return {
        postChange: (val) => {
            dispatch(updateNewMessageActionCreator(val));
        },
        postAdd: () => {
            dispatch(addMessageActionCreator());
        }
    };
}

const MessagesContainer = connect(f1, f2)(Messages);

export default MessagesContainer;