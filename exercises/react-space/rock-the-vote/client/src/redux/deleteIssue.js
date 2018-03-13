export function deleteIssue(issue) {
    return {
        type: "DELETE-ISSUE",
        issue
    }
}

function reducer(prevState = {}, action) {
    switch (action.type) {
        case "DELETE-ISSUE":
            return
        default:
            return prevState
    }
}

export default reducer;
