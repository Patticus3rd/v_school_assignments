import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import snapcodes from './snapcodes';

const rootReducer = combineReducers({
    snapcodes,
    router: routerReducer
});

export default rootReducer;