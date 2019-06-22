import * as types from './types';

export const changeAuth = (isAuthed) => ({
    type: types.CHANGE_AUTH,
    isAuthed: isAuthed
})