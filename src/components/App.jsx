import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route path="/posts" component={Posts} />
            </BrowserRouter>
        )
    }
}
