import * as types from './types';
import firestore from '../../utils/firebase/firestore';

export const fetchPosts = () => dispatch => {
    firestore.collenction("posts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`)
        })
    })
    dispatch(setPosts([]))
}

export const setPosts = (posts) => ({
    type: types.SET_POSTS, posts
})