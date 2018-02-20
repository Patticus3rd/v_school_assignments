import axios from 'axios';



const articlesReducer = (prevState = { data: [], loading: true}, action) => {
    switch(action.type){
        case "ADD_ARTICLE":
        return {
            data: [...prevState.data, action.data],
            loading: false
        }
        default:
        return prevState;
    }
}

let articleURL = "http://localhost:9000/republicans/"

export const addArticle = (inputs) => {
    return function action(dispatch) {
        axios.post(articleURL, inputs)
        .then((response) => {
            console.log(response);
            let { data } = response;
            dispatch({
                type: "ADD_ARTICLE",
                data
            })
        })
    }
}

export default articlesReducer;