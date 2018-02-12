import axios from 'axios';

const filtersReducer = (prevState = { data: [], loading: true }, action) => {
    switch (action.type) {
        case "ADD_FILTER":
            return {
                loading: false,
                data: [...prevState.data, action.data]
            }
        default:
            return prevState;
    }
}

let filterURL = "http://localhost:9000/snapcodes/"

export const addFilter = (inputs) => {
    return function action(dispatch) {
        axios.post(filterURL, inputs)
            .then((response) => {
                console.log(response);
                let { data } = response;
                dispatch({
                    type: "ADD_FILTER",
                    data
                })
            })
    }
}



export default filtersReducer;