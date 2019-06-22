import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import HeaderNav from './common/HeaderNav';
import "./assets/styles/app.scss";

import SignUp from './auth/SignUp';

export default class App extends Component {

    componentWillMount(){
        
    }

    render() {
        return (
            <div>
                <HeaderNav />
                <section className="app-wrapper">
                    <Route exact path="/" component={Home} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/signup" component={SignUp} />
                </section>
            </div>
        )
    }
}
