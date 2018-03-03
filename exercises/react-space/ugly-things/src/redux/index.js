export function addNewPost() {
    return {
        type: "ADD_NEW_POST"
    }
}

function reducer(prevState = {}, action) {
    switch (action.type) {
        case "ADD_NEW_POST":
            return {
                Url: "",
                
            }
    }
}
