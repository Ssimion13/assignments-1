export function addNewPost(url, title, description) {
    return {
        type: "ADD_NEW_POST",
        url,
        title,
        description
    }
}

function reducer(prevState = [], action) {
    switch (action.type) {
        case "ADD_NEW_POST":
            return [...prevState, {
                url: action.url,
                title: action.title,
                description: action.description
            }]
        default: prevState
    }
}
