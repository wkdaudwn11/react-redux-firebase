import * as types from '../actions/types'

export const setAuth = (isAuthed) => ({
    type: types.SET_AUTH,
    isAuthed: isAuthed
})

export const changeAuth = (isAuthed) => dispatch => {
    localStorage.setItem('isAuthed', isAuthed) // 쿠키같은 친구
    dispatch(setAuth(isAuthed))
}