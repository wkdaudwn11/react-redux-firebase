import { SET_AUTH } from '../actions/types';

//const isAuthed = localStorage.getItem('isAuthed') || false

export default (auth = false, action) => {
    switch (action.type){
        case SET_AUTH:
            return action.isAuthed

        default:
                return auth;
    }
}