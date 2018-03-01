const redux = require('redux');

const state = [];

const newPerson = {
    name: "Joe",
    phone: "555-555-5555",
    email: "joe@schmoe.com"
}

function addPerson(person) {
    return {
        type: 'ADD_PERSON',
        person
    }
}

function removePerson(name) {
    return {
        type: 'REMOVE_PERSON',
        name
    }
}

function reducer(prevState = state, action) {
    switch (action.type) {
        case 'ADD_PERSON':
            return [...prevState, action.person]

        case 'REMOVE_PERSON':
            {
                return prevState.filter((item) => {
                    return item.name !== action.name
                })
            }
        default:
            return prevState
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addPerson({
    name: "Mike",
    phone: "666-666-6666",
    email: "a@a.com"
}));
store.dispatch(addPerson({
    name: "Joe",
    phone: "266-666-6666",
    email: "b@a.com"
}));
store.dispatch(addPerson({
    name: "Sam",
    phone: "466-666-6666",
    email: "c@a.com"
}));
store.dispatch(addPerson({
    name: "Jane",
    phone: "366-666-6666",
    email: "d@a.com"
}));
store.dispatch(removePerson("Mike"));
