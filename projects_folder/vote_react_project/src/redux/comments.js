import axios from 'axios';

const commentReducer = (prevState = { data: [], loading: true}, action) => {
    switch(action.type){
        case "ADD_COMMENT":
        return {
            data: [...prevState.data, action.data],
            loading: false
        }
        default:
        return prevState
    }
}

