export function addNewIssue(newIssue) {
    return {
        type: "ADD-NEW-ISSUE",
        newIssue
    }
}

function reducer(prevState = {}, action) {
    switch (action.type) {
        case "ADD-NEW-ISSUE":
            return
        default:
            return prevState
    }
}

export default reducer;
