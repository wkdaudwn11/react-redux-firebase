import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './components/Root';
import App from './components/App';
import Posts from './components/Posts';


ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App} />
            <Route path="/posts" component={Posts} />
        </BrowserRouter>
    </Root>
    ,
    document.getElementById('root')
);