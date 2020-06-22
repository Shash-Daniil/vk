import { createStore, combineReducers } from 'redux';
import { messageReducer } from './messages-reducer';
import { profileReducer } from './profile-reducer';
import { newsReducer } from './news-reducer';
import communityReducer from './communities-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    newsPage: newsReducer,
    messagePage: messageReducer,
    profilePage: profileReducer,
    communitiesPage: communityReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;