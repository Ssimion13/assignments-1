export function startTimer() {
    return {
        type: "START_TIMER"
    }
}

export function stopTimer() {
    return {
        type: "STOP_TIMER"
    }
}

export function resetTimer() {
    return {
        type: "RESET_TIMER"
    }
}

function reducer(prevState = {minutes: 0, seconds: 0, milliseconds: 0}, action) {
    switch (action.type) {
        case "START_TIMER":
            return {
                ...prevState,
                milliseconds: prevState.milliseconds < 99 ? prevState.milliseconds + 1 : 0,
                seconds: prevState.milliseconds === 99 ? prevState.seconds + 1 : prevState.seconds,
                minutes: prevState.seconds === 59 ? prevState.minutes + 1 : prevState.minutes
            }
        case "STOP_TIMER":
            return {
                ...prevState
            }
        case "RESET_TIMER":
            return {
                milliseconds: 0,
                seconds: 0,
                minutes: 0
            }
        case "LAP":
            return {
                ...prevState
            }
        default:
            return prevState
    }
}

export default reducer;
