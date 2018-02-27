import React from 'react';

const Badge = (props) => {
    return (
        <div className="output">
            <header>Badge:</header>
            <h6>Name: {props.inputs.firstName} {props.inputs.lastName}</h6>
            <h6>Phone: {props.inputs.phone}</h6>
            <h6>Place of birth: {props.inputs.birthPlace}</h6>
            <h6>Favorite Food: {props.inputs.favoriteFood}</h6>
            <h6>Email: {props.inputs.email}</h6>
            <p>{props.inputs.aboutInfo}</p>
        </div>
    )
}

export default Badge;
