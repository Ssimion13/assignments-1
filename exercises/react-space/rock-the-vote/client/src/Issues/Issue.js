import React from 'react';

const Issue = (props) => {
    console.log()
    return (
        <div className="issue">
            <h3>{props.title}</h3>
            <h3>{props.description}</h3>
            <button>UP</button>
            <button>DOWN</button>
            <p>Up Votes: {props.vote.up}</p>
            <p>Down Votes: {props.vote.down}</p>
            <div>
                <button className="remove">REMOVE</button>
                    <button className="edit">EDIT</button>
            </div>
        </div>
    )
}

export default Issue;
