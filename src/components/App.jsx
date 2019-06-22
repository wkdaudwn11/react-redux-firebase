import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import { connect } from 'react-redux';
import firebaseApp from '../utils/firebase';
import HeaderNav from './common/HeaderNav';
import "./assets/styles/app.scss";

export default class App extends Component {

    componentWillMount(){
        firebaseApp.auth().onAuthStateChanged(user => {
            if(user){
                console.log('logged in');
            }else{
                console.log('not logged in');
            }
        })
    }

    render() {
        return (
            <div>
                <HeaderNav />
                <Route exact path="/" component={Home} />
                <Route path="/posts" component={Posts} />
            </div>
        )
    }
}
