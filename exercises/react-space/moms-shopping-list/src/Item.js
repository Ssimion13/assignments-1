import React from 'react';

function Item(props) {
    return (
        <li>
            <p style={props.completed}
                key={}
            <button className="itemDoneButton"
                    onClick={() => props.handleItemDone(props.entry)}>
                X
            </button>
            <button className="itemDelButton"
                    onClick={() => props.handleItemDelete(props.text)}>
                X
            </button>
            {props.entry}
        </li>
    )
}

export default Item;
