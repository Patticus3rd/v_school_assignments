import { createStore, combineReducers} from 'redux';
import count from './count';

let store = createStore(combineReducers({ count }));

export default store;
