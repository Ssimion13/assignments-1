import axios from 'axios';

export function getOneIssue(issue.id) {
    return function(dispatch) {
        axios.get("/issues/" + issue.id).then(response => {
            dispatch({
                    type: "GET_ONE_ISSUE",
                    issue: response
            });
        });
    }
}

export function getAllIssues() {
    return function(dispatch) {
        axios.get("/issues").then(response => {
            dispatch({
                    type: "GET_ALL_ISSUES",
                    issues: response
            });
        });
    }
}

export function getAllIssues() {
    return function(dispatch) {
        axios.get("/issues").then(response => {
            dispatch({
                    type: "GET_ALL_ISSUES",
                    issues: response
            });
        });
    }
}

export function putIssue(issue) {
    return function(dispatch) {
        axios.get("/issues/" + issue.id).then(response => {
            dispatch({
                    type: "PUT_ISSUE",
                    issue: response
            });
        });
    }
}

export function deleteIssue(issue.id) {
    return function(dispatch) {
        axios.delete("/issues/" + issue.id).then(response => {
            dispatch({
                    type: "DELETE_ISSUE",
                    issueId: issue.id
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
        case "ADD_NEW_ISSUE":
            return [...prevState, action.newIssue];
        case "PUT_ISSUE":
            return prevState.map(issue => {
                issue.id === action.id ? action.issue : issue;
            });
        case "DELETE_ISSUE":
            return prevState.filter(issue => {
                return action.issueId !== issue.id;
            });
        default:
            return prevState
    }
}

export default reducer;
