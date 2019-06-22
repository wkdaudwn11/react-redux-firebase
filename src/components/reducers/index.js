import { combineReducers } from 'redux';
import authReducer from '../reducers/auth';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
});