import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import { Provider } from 'react-redux';

import reducer from './redux';

import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import './styles.css';
import App from './App';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
