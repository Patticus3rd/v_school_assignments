import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import art from "./art";

let store = createStore(combineReducers({ art }), applyMiddleware(thunk));

export default store;