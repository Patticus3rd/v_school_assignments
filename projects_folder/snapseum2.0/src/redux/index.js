import { createStore, combineReducers, applyMiddleware } from 'redux';
import filters from './filters';
import thunk from 'redux-thunk';

const rootReducer = (combineReducers({ filters }));

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})

export default store;