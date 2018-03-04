import { createStore, combineReducers } from 'redux';
import entries from "./entries";

const store = createStore(
    combineReducers({entries}),
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

export default store;
