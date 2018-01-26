import { queryStringConverter } from "../utils";
import axios from 'axios';

let art = (state = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "GET_ART":
            return {
                loading: false,
                data: action.data
            }
        default:
            return state;
    }
}

let artUrl = "https://api.harvardartmuseums.org/object?apikey=040e0810-008c-11e8-87d8-754fcee58be2?";

export let getArt = (queryObj) => {
    // convert object into query stiring and append it to url;
    let url = queryStringConverter(queryObj, artUrl);
    return dispatch => {
        axios.get(url)
        let { records } = response.data
        .then((response) => dispatch({
            type: "GET_ART",
            data: records
        }))
    }
}

export default art;