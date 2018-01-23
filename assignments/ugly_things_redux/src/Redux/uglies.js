const ugliesReducer = (prevUglies = [], action) => {
    switch (action.type) {
        case "ADD_UGLY":
            return [...prevUglies, action.ugly]
        default:
            return prevUglies;
    }
}
export const addUgly = (ugly) => {
    return {
        type: "ADD_UGLY",
        ugly
    }
}

export default ugliesReducer;
