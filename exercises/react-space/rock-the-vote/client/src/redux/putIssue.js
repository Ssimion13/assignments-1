export function putIssue(issue) {
    return {
        type: "PUT-ISSUE",
        issue
    }
}

function reducer(prevState = {}, action) {
    switch (action.type) {
        case "PUT-ISSUE":
            return
        default:
            return prevState
    }
}

export default reducer;
