import { combineReducers } from 'redux';
import filtersReducers from './filtersReducer';

const rootReducer = combineReducers({
    filters: filtersReducers
})

export default rootReducer;