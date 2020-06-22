import React from 'react';
import News from './News';
import { updatePostTxtActCreator, addPostActionCreator} from '../../redux/news-reducer';
import { connect } from 'react-redux';

let f1 = (state) => {
    return {
        postNews: state.newsPage.postnews,
        postText: state.newsPage.postText
    }
}

let f2 = (dispatch) => {
    return {
        postChange: (value) => {
            dispatch(updatePostTxtActCreator(value));
        },
        postAdd: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const NewsContainer = connect(f1, f2)(News);

export default NewsContainer;