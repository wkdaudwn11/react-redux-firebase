import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './components/reducers';
import reduxThunk from 'redux-thunk';

export default ({ children, initialState = {} }) => {

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxThunk)
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};