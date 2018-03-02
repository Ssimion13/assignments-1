import React from 'react';
import {connect} from 'react-redux';

const DisplayPic = (props) => {

    return (
        props.isLoading
        ? <h3>Loading Picture...</h3>
        : <img src={props.pic} alt="" className="randomPic"/>)
}

export default connect(state => state, null)(DisplayPic);
