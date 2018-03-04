import React from 'react';
import Display from './Display';

const DisplayContainer = props => {
    return (
        <div className="app">
            <h3>Redux Timer</h3>
            <Display />
            <br/><br/>
            <button onClick={props.handleStart}>Start</button>
            <button onClick={props.handleStop}>Stop</button>
            <button onClick={props.handleReset}>Reset</button>
            <button onClick={props.handleLap}>Lap</button>
        </div>
    )
}

export default DisplayContainer;
