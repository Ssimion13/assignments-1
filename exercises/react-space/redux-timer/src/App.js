import React, {Component} from 'react';
import {connect} from "react-redux";

import { startTimer, stopTimer, resetTimer } from "./redux";

import DisplayContainer from "./DisplayContainer";

let start;

class App extends Component {
    constructor() {
        super();
        this.state = {
            minutes: 0
        }
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleStart() {
        start = setInterval(this.props.startTimer, 10);
    }

    handleStop() {
        const stop = clearInterval(start);
    }

    handleReset() {
        this.props.resetTimer();
    }

    handleLap() {
        this.props.lap();
    }

    render() {
        return (
            <div className="App">
                <DisplayContainer
                    seconds = {this.props.seconds}
                    minutes = {this.state.minutes}
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
