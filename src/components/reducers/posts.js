import * as types from '../actions/types'

export default (posts = [], action) => {
    switch (action.type) {
        case types.SET_POSTS:
            return action.posts
        default:
            return posts
    }
}