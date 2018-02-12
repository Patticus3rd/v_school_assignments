import { createStore, combineReducers, applyMiddleware } from 'redux';
import filters from './filters';
import favorites from './favorites';
import thunk from 'redux-thunk';

const rootReducer = (combineReducers({ filters, favorites }));

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})

export default store;