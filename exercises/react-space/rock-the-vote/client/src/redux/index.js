import { createStore, combineReducers } from 'redux';
import issues from './issues';

const store = createStore (
    combineReducers({issues}),
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(),
    applyMiddleware(thunk)
);

export default store;
