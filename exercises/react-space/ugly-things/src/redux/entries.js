export function addNewPost(entry) {
    return {
        type: "ADD_NEW_POST",
        entry
    }
}

function reducer(prevState = [], action) {
    switch (action.type) {
        case "ADD_NEW_POST":
            return [...prevState, action.entry]
        default:
            return prevState
    }
}

export default reducer;
