import React from 'react';
import {connect} from 'react-redux';

const Display = (props) => {
    return (
        <div>
            <h1>
                {props.minutes < 10 ? 0 + '' + props.minutes : props.minutes}
                :{props.seconds < 10 ? 0 + '' + props.seconds : props.seconds}
                :{props.milliseconds < 10 ? 0 + '' + props.milliseconds : props.milliseconds}
            </h1>
        </div>
    )
}

export default connect(state => state, {})(Display);
