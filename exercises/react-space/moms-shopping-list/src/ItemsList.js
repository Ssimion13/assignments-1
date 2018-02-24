import React from 'react';
import Item from './Item';

function ItemsList(props) {
        const mappedEntries = props.groceryItems.items.map((item, i) => {
            return <Item entry={item} key={item+i}/>
        });
        return (
            <div>{ mappedEntries }</div>
        )
}

export default ItemsList;
