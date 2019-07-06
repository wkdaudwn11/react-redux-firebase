import * as types from '../actions/types'
import { CommentActions } from 'semantic-ui-react';

const initialState = {
    list: [],
    showModal: false,
    currentPost: {}
}

export default (posts = initialState, action) => {
    switch (action.type) {
        case types.SET_POSTS:
            return { ...posts, list: action.list }
        case types.TOGGLE_POST_FORM:
            return { ...posts, showModal: action.isOpen, currentPost: action.post }
        default:
            return posts
    }
}