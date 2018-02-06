import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index.js';

//create an object for the default data
const defaulState = {
    snapcodes,
};

const store = createStore(rootReducer, defaulState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;