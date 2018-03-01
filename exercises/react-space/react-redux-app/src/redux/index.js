export function increment() {
    return {
        type: "INCREMENT_ONE"
    }
}

export function incrementBy() {
    return {
        type: "INCREMENT_BY"
    }
}

function reducer(prevState = {}, action) {
    switch(action.type) {
        case "INCREMENT_ONE":
            return
    }
}
