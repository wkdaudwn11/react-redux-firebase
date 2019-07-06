import * as types from './types';

export const changeAuth = (isAuthed) => ({
    type: types.CHANGE_AUTH,
    isAuthed: isAuthed
})

export const setAuth = (isAuthed) => dispatch => {
    localStorage.setItem('isAuthed', isAuthed) // 쿠키같은 친구
    dispatch(changeAuth(isAuthed))
}