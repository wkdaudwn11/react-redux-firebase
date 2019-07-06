import * as types from './types';
import firestore from '../../utils/firebase/firestore';

export const fetchPosts = () => dispatch => {
    const list = []
    
    return firestore.collection("posts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data()
            let { title, body } = data;
            list.push({ id: doc.id, title: title, body: body })
        })
        dispatch(setPosts(list))
    })
}

export const setPosts = (list) => ({
    type: types.SET_POSTS, list
})