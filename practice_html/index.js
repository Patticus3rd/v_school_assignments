const redux = require('redux')

function names( prevNames = [], action) {
    switch (action.type) {
        case "ADD_NAMES":
            return [...prevNames, ...action.names];
        case "DELETE_NAMES":
            let newContacts = [...prevContacts];
            return [...prevState, newContacts(action.deleted)]
        case "EDIT_NAMES":
            return action.edit
        default:
            return prevNames
    }
}

let store = redux.createStore(redux.combineReducers({ names}))

store.subscribe(() => {
    console.log(store.getState())
})

function addName(names) {
    return {
        type: "ADD_NAMES",
        names
    }
}

function deleteName(names) {
    return {
        type: "DELETE_NAMES",
        deleted: names
    }
}

function editName(names) {
    return {
        type: "EDIT_NAMES",
    }
}


store.dispatch(addName(["Jess"]))
store.dispatch(addName(["Oliver"]))
store.dispatch(addName(["Nick"]))
store.dispatch(deleteName("Jess"))

