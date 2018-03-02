import React from 'react';
import { connect } from 'react-redux';

const DisplayPic = (props) => {
    return (
            <img src={props.pic}/>
    )
}

export default connect(state => state, null)(DisplayPic);
