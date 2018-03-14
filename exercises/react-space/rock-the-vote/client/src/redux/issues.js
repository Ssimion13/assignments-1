import axios from 'axios';

export function getOneIssue(id) {
    return function(dispatch) {
        axios.get("/issues/" + id).then(response => {
            dispatch({
                type: "GET_ONE_ISSUE",
                issue: response.data
            });
        });
    }
}

export function getAllIssues() {
    return function(dispatch) {
        axios.get("/issues").then(response => {
            dispatch({
                type: "GET_ALL_ISSUES",
                issues: response.data
            });
        });
    }
}

export function postNewIssue(newIssue) {
    return function(dispatch) {
        axios.post("/issues", newIssue).then(response => {
            dispatch({
                type: "POST_NEW_ISSUE",
                issue: response.data
            });
        });
    }
}

export function putIssue(id, update) {
    return function(dispatch) {
        axios.put("/issues/" + id, update).then(response => {
            dispatch({
                type: "PUT_ISSUE",
                issue: response.data
            });
        });
    }
}

export function incrementUpVote(id, num) {
    return function(dispatch) {
        num = num + 1;
        const obj = {vote: {up: num}};
        axios.put("/issues/" + id, obj).then(response => {
            dispatch({
                type: "PUT_ISSUE",
                issue: response.data
            });
        });
    }
}

export function incrementDownVote(id, num) {
    return function(dispatch) {
        num = num + 1;
        const obj = {vote: {down: num}};
        axios.put("/issues/" + id, obj).then(response => {
            dispatch({
                type: "PUT_ISSUE",
                issue: response.data
            });
        });
    }
}

export function deleteIssue(id) {
    return function(dispatch) {
        axios.delete("/issues/" + id).then(response => {
            dispatch({
                type: "DELETE_ISSUE",
                issueId: id
            });
        });
    }
}

function reducer(prevState = [], action) {
    switch (action.type) {
        case "GET_ONE_ISSUE":
            return action.issue;
        case "GET_ALL_ISSUES":
            return action.issues;
        case "POST_NEW_ISSUE":
            return [...prevState, action.issue];
        case "PUT_ISSUE":
            return prevState.map(issue => {
                return issue._id === action.issue._id ? action.issue : issue;
            });
        case "DELETE_ISSUE":
            return prevState.filter(issue => {
                return action.issueId !== issue._id;
            });
        default:
            return prevState
    }
}

export default reducer;
