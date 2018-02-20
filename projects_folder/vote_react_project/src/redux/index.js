import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import articles from './articles';

const rootReducer = combineReducers({ articles})

let store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})


export default store;