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
                milliseconds: (prevState.milliseconds + 1) % 99,
                seconds: Math.round((prevState.milliseconds + 1) / 99),
                minutes: Math.round((prevState.seconds + 1) / 59)
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
