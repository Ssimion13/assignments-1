import React from 'react';

function Item(props) {
    return (
        <li>
            <button className="itemDoneButton" onClick={props.handleItemDone}>
                X
            </button>
            <button className="itemDelButton" onClick={props.handleItemDelete}>
                X
            </button>
            {props.entry}
        </li>
    )
}

export default Item;
