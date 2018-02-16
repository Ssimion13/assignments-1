import React from 'react';

function VacaTile(props) {
    return (
        <div className="vacaTile">
            <h1>{props.place}</h1>
            <h2>{props.price}</h2>
            <p>{props.timeToGo}</p>
            <img src={props.image}/>
        </div>
    )
}

export default VacaTile;
