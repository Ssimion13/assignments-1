import React from 'react';
import Item from './Item';

function ItemsList(props) {
        const mappedEntries = props.groceryItems.items.map((item, i) => {
            return <Item entry={item.text}
                        handleItemDelete={props.handleItemDelete}
                        handleItemDone={props.handleItemDone}
                        items={props.items}
                        id={item+i}
                        key={item+i}
                    />
        });
        return (
            <ul>{ mappedEntries }</ul>
        )
}

export default ItemsList;
