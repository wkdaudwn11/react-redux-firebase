import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth'; // 인증
import 'firebase/firestore'; // DB

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCwS61wvT4E9WWgIvUWr0eZoDlNY-wRD2E",
    authDomain: "react-redux-firebase-5a2e7.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-5a2e7.firebaseio.com",
    projectId: "react-redux-firebase-5a2e7",
    storageBucket: "react-redux-firebase-5a2e7.appspot.com",
    messagingSenderId: "838396736629",
    appId: "1:838396736629:web:b0a2af5fa9bf0ef7"
};

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForprofile: true // firestore에 프로필을 저장
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase 설정
const createStoreWithFirebase = compose(
    applyMiddleware(
        reduxThunk.withExtraArgument(getFirebase)
    ),
    reactReduxFirebase(firebase, rrfConfig),
)(createStore)

export default ({ children, initialState = {} }) => {

    const store = createStoreWithFirebase(
        reducers,
        initialState
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};