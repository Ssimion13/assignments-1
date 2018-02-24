import React from 'react';

const GridItemComponent = (props) => {

    const styles = {
        backgroundColor: props.color,
        border: "1px black solid",
        borderRadius: "15px"
    }

    return (
        <div style={styles}></div>
    )
}

export default GridItemComponent;
