import React from 'react';

function Item(props) {
    return (
        <li>
            <button className="itemDoneButton"
                    onClick={() => props.handleItemDone(props.entry)}>
                X
            </button>
            <button className="itemDelButton"
                    onClick={() => props.handleItemDelete(props.entry)}>
                X
            </button>
            {props.entry}
        </li>
    )
}

export default Item;
