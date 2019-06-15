import { CHNAGE_AUTH } from '../actions/types';

export default (state = false, action) => {
    switch (action.type){
        case CHNAGE_AUTH:
            return action.payload

        default:
                return state;
    }
}