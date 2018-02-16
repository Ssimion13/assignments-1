import React from 'react';

function Tile(props) {
    const backgroundColor = {backgroundColor: props.backgroundColor};
    return (
        <div className="tile" style={backgroundColor}>
            <div><h4>{props.title}</h4></div>
            <div><h6>{props.subtitle}</h6></div>
            <div><p>{props.information}</p></div>
        </div>
    )
}

export default Tile;
