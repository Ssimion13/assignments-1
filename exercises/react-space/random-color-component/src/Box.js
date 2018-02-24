import React from 'react';

const Box = (props) => {
    const styles = {
        backgroundColor: "#" + props.color,
        border: "1px black solid",
        borderRadius: "15px",
        height: "300px",
        width: "300px"
    }
    return (
        <div style={styles}></div>
    )
}

export default Box;
