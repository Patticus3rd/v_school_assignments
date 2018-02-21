import axios from 'axios';



const articlesReducer = (prevState = { data: [], loading: true }, action) => {
    switch (action.type) {
        case "ADD_ARTICLE":
            return {
                data: [...prevState.data, action.data],
                loading: false
            }
        case "EDIT_ARTICLE":
            return {
                loading: false,
                data: prevState.data.map((comment) => {
                    if (comment._id === action.index) {
                        return action.updatedComment;
                    }
                })
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

export const editArticle = (updatedComment, index) => {
    return function action(dispatch) {
        axios.put(articleURL + index, updatedComment)
        .then((response) => {
            dispatch({ 
                type: "EDIT_ARTICLE",
                updatedComment: response.data,
                index
            })
        })
    }
}

export default articlesReducer;