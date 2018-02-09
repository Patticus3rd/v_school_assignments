import { GET_FILTERS } from '../actions/actionTypes.js';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_FILTERS:
            return action.payload;
        default:
            return state;
    }
}