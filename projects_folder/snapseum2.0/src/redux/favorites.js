import axios from 'axios';


const favReducer = (prevState = { data: [], loading: true}, action) => {
    switch (action.type) {
        case 'LIKE_FILTER':
            return {
                loading: false,
                data: [...prevState.data, action.data]
            };
        case 'UNLIKE_FILTER':
            return {
                loading: false,
                data: prevState.data.filter((filter) => {
                    return filter._id !== action.id
                })
            };
        default:
            return prevState;
    }
}

let favURL = "http://localhost:9000/favorites/"

export const addFavorite = (e) => {
    return function action(dispatch) {
        axios.post(favURL, e)
            .then((response) => {
                console.log(response);
                let { data } = response;
                dispatch({
                    type: "LIKE_FILTER",
                    data
                })
            })
    }
}

export const deleteFavorite = (id) =>{
    return dispatch => {
        axios.delete(favURL + id, id)
        .then((response) => {
            dispatch({
                type: "UNLIKE_FILTER",
                id
            })
        })
    }
}

export default favReducer;