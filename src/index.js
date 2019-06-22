import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './components/Root';
import App from './components/App';
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Root>
    ,
    document.getElementById('root')
);