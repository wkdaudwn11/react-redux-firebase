import { combineReducers } from 'redux';
import authReducer from '../reducers/auth';
import postsReducer from '../reducers/posts';

export default combineReducers({
    auth: authReducer,
    posts: postsReducer
});