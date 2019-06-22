import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

const middleware = applyMiddleware(
  reduxThunk
)

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    middleware
  )
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}