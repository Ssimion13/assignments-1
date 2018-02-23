import React from 'react';
import Item from './Item';

function ItemsList(props) {
        const mappedEntries = props.inputs.items.map((item, i) => {
            return <Item entry={item.entry} key={item.entry+i}/>
        });
        return (
            <div>{ mappedEntries }</div>
        )
}

export default ItemsList;
