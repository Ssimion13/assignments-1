import React from 'react';

function VacaTile(props) {
    const background = {background: "url(" + props.background + ")"};
    return (
        <div className="vacaTile" style={background}>
            <h1>{props.place}</h1>
            <h2>{props.price}</h2>
            <p>{props.timeToGo}</p>
        </div>
    )
}

export default VacaTile;
