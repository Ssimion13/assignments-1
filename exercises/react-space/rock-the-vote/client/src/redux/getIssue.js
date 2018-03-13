export function getOneIssue(issue) {
    return {
        type: "GET-ONE-ISSUE",
        issue
    }
}

function reducer(prevState = {}, action) {
    switch (action.type) {
        case "GET-ONE-ISSUE":
            return
        default:
            return prevState
    }
}

export default reducer;
