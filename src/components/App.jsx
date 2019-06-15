import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Posts from '../components/Posts';

export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/posts" component={Posts} />
            </div>
        )
    }
}
