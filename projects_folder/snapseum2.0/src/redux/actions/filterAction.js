import { GET_FILTERS } from './actionTypes.js';
import { images } from '../../firebase.js';

export function getFilters() {
    return dispatch => {
        images.on('value', snapshot => {
            dispatch({
                type: GET_FILTERS,
                payload: snapshot.val()
            })
        })
    }
}


//this file is an action type.