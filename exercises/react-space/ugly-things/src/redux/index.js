export function addNewPost(url, title, description) {
    return {
        type: "ADD_NEW_POST"
    }
}

function reducer(prevState = {url: "", title: "", description: ""}, action) {
    switch (action.type) {
        case "ADD_NEW_POST":
            return {
                url: action.url,
                title: action.title,
                description: action.description
            }
        default: prevState
    }
}
