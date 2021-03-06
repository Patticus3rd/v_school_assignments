const redux = require("redux");

function contacts(prevContacts = [], action) {
    switch (action.type){
        case "ADD_CONTACT":
            return [...prevContacts, action.contact];
        case "REMOVE_CONTACT":
            let newContacts = [...prevContacts];
            return newContacts.filter((contact) => {
                return action.id !== contact.id;
            });
        case "EDIT_CONTACT":
            let editedContacts = [...prevContacts];
            return editedContacts.map((contact) => {
                if (contact.id === action.id ) {
                    return action.contact;
                } else {
                    return contact;
                }
            });
            return
                defautl: 
                return prevContacts;
    }
}

let store = redux.createStore(redux.combineReducers({ contacts }));

store.subscribe(() => {
    console.log(store.getState)
})

function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        contact
    }
}

function removeContact(id) {
    return {
        type: "REMOVE_CONTACT",
        id
    }
}
function editContact(contact, id){
    return {
        type: "EDIT_CONTACT",
        id,
        contact
    }
}


store.dispatch(addContact({ 
    id: 0,
    name: "John",}));
