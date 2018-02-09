import { GET_FILTERS } from './actionTypes.js';
import { database } from '../../firebase.js';

export function getFilters() {
    return dispatch => {
        database.on('value', snapshot => {
            dispatch({
                type: GET_FILTERS,
                payload: snapshot.val()
            })
        })
    }
}

export function saveFilter(filter){
   return dispatch => database.push(filter);
}

//this file is an action type.