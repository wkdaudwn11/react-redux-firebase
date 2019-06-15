import * as firebase from 'firebase';

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

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;