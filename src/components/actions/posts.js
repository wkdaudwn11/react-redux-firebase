import * as types from './types';
import firestore from '../../utils/firebase/firestore';

export const fetchPosts = () => dispatch => {
    const posts = []
    
    return firestore.collection("posts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data()
            let { title, body } = data;
            posts.push({ id: doc.id, title: title, body: body })
        })
        dispatch(setPosts(posts))
    })
}

export const setPosts = (posts) => ({
    type: types.SET_POSTS, posts
})