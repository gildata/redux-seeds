import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import {RootReducer} from './reducers';
import App from './components/App';

/* eslint-disable no-underscore-dangle */
/* 
let store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

*/

// middleware
// http://redux.js.org/docs/api/applyMiddleware.html
// http://redux.js.org/docs/Glossary.html#middleware
// http://redux.js.org/docs/Glossary.html#async-action

const middleware = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, composeEnhancers(
    applyMiddleware(...middleware)
));
/* eslint-enable */


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();



