import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import snapcodes from './snapcodes';

const rootReducer = combineReducers({
    snapcodes,
    routing: routerReducer
});

export default rootReducer;