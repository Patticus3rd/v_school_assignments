import { createStore, combineReducers } from 'redux';
import uglies from './uglies';

const rootReducer = (combineReducers({ uglies }));

let store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState())
})

export default store;