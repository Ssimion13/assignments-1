import React from 'react';
import GridItemComponent from './GridItemComponent';

const Squares = (props) => {

    return (
        <div className="grid-container">
            <GridItemComponent color={props.colors[0]}/>
            <GridItemComponent color={props.colors[1]}/>
            <GridItemComponent color={props.colors[2]}/>
            <GridItemComponent color={props.colors[3]}/>
        </div>
    )
}

export default Squares;
