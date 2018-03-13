import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import issues from './issues';

const store = createStore (
    combineReducers({issues}),
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(),
    applyMiddleware(thunk)
);

export default store;
