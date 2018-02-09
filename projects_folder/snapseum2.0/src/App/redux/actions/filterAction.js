import { GET_FILTERS } from '../../../../actionTypes.js';
import { databse } from '../../../firebase.js';

export function getFilters() {
    return dispatch => {
        database.on('value', snapshot => {
            dispatch({
                type: "GET_NOTES",
                payload: snapshot.val()
            })
        })
    }
}

export function saveFilter(filter){
   return dispatch => database.push(filter);
}