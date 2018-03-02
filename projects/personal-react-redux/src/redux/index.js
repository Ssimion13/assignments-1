import axios from 'axios';

export function getRandomPic(breed) {
    return function(dispatch) {
        axios.get("https://dog.ceo/api/breed/" + breed + "/images/random")
        .then(response => {
            dispatch({
                type: "GET_RANDOM_PIC",
                breed: response.data.message
            })
        })
    }
}

function reducer(prevState = {pic: ""}, action){
    switch (action.type) {
        case "GET_RANDOM_PIC":
            console.log(action.type);
            return {
                pic: action.breed
            }
        default:
            return prevState;
    }
}

export default reducer;
