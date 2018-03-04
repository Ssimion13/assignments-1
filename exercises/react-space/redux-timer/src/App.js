import React, {Component} from 'react';
import {connect} from "react-redux";

import { startTimer, stopTimer, resetTimer } from "./redux";

import DisplayContainer from "./DisplayContainer";

let start;

class App extends Component {
    constructor() {
        super();
        this.state = {
            isRunning: false
        }
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleStart() {
        if (this.state.isRunning === false) {
            start = setInterval(this.props.startTimer, 10);
            this.setState = {
                isRunning: true
            }
        }
    }

    handleStop() {
        const stop = clearInterval(start);
        if (this.state.isRunning === true) {
            this.setState = {
                isRunning: false
            }
        }
    }

    handleReset() {
        this.props.resetTimer();
        this.handleStop();
    }

    handleLap() {
        this.props.lap();
    }

    render() {
        return (
            <div className="App">
                <DisplayContainer
                    milliseconds = {this.props.milliseconds}
                    seconds = {this.props.seconds}
                    minutes = {this.props.minutes}
                    handleStart = {this.handleStart}
                    handleStop = {this.handleStop}
                    handleReset = {this.handleReset}
                    handleLap = {this.handleLap}
                    {...this.state}
                />
            </div>
        );
    }
}

export default connect(null, { startTimer, stopTimer, resetTimer})(App);
