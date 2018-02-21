import axios from 'axios';

const ArticleURL = 'http://localhost:9000/democrats/'

const demsReducer = (prevState = { data: [], loading: true}, action) => {
    switch(action.type){
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
        return prevState
    }
}

export function addRep(newArticle){
    return(dispatch) => {
        axios.post(ArticleURL, newArticle)
        .then((response) => {
            let { data } = response;
            dispatch({
                type: "ADD_ARTICLE",
                data
            })
        })
    }
}

export const editDemArticle = (updatedComment, index) => {
    return function action(dispatch) {
        axios.put(ArticleURL + index, updatedComment)
        .then((response) => {
            dispatch({ 
                type: "EDIT_ARTICLE",
                updatedComment: response.data,
                index
            })
        })
    }
}


export default demsReducer;