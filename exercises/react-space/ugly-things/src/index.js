import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'react';
import { Provider } from 'react-redux';

import reducer from "./redux";

import './index.css';
import App from './App';

const store = createStore(
    reducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
);
