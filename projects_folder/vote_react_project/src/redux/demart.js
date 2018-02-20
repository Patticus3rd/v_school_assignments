import axios from 'axios';

const ArticleURL = 'http://localhost:9000/democrats/'

const demsReducer = (prevState = { data: [], loading: true}, action) => {
    switch(action.type){
        case "ADD_ARTICLE":
        return {
            data: [...prevState.data, action.data],
            loading: false
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



export default demsReducer;