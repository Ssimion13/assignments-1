import React from 'react';
import {connect} from 'react-redux';

const DisplayPic = (props) => {
    let image = {backgroundImage: `url(${props.pic})`}
    return (
        props.isLoading
        ? <h3>Loading Picture...</h3>
        : <div style={image} className="randomPic"></div>)
}

export default connect(state => state, null)(DisplayPic);
