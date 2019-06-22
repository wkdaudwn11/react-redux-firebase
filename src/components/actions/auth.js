import firebase from 'firebase/app';
import * as alerts from '../../utils/alerts';
import * as types from './types';

export const changeAuth = (isAuthed) => ({
    type: types.CHANGE_AUTH,
    isAuthed: isAuthed
})