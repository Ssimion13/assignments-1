export function getAllIssues(issue) {
    return {
        type: "GET-ALL-ISSUES",
        issue
    }
}

function reducer(prevState = {}, action) {
    switch (action.type) {
        case "GET-ALL-ISSUES":
            return
        default:
            return prevState
    }
}

export default reducer;
