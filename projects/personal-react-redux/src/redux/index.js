import axios from 'axios';

export function getRandomPic(breed) {
    let isLoading;
    return function(dispatch) {
        dispatch({
            type: "RECEIVE_PIC",
            isLoading: true
        })
        axios.get("https://dog.ceo/api/breed/" + breed + "/images/random")
        .then(response => {
            dispatch({
                type: "GET_RANDOM_PIC",
                breed: response.data.message
            })
        })
    }
}

function reducer(prevState = {isLoading: false, pic: ""}, action){
    switch (action.type) {
        case "RECEIVE_PIC":
            return {
                isLoading: true,
                pic: ""
            }
        case "GET_RANDOM_PIC":
            return {
                isLoading: false,
                pic: action.breed
            }
        default:
            return prevState;
    }
}

export default reducer;
