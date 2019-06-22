import { CHANGE_AUTH } from '../actions/types';

export default (auth = false, action) => {
    switch (action.type){
        case CHANGE_AUTH:
            return action.isAuthed

        default:
                return auth;
    }
}