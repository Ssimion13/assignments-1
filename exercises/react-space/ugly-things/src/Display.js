import React from 'react';
import { connect } from 'react-redux';

const Display = props => {
    const mappedEntries = props.entries.map(entry => {
        let image = {backgroundImage: `url(${entry.url})`}
        return (
            <div>
                <div style={image} className="image"></div>
                <h1>{entry.title}</h1>
                <h3>{entry.description}</h3>
            </div>
        )
    })
    return (
        <div>
            {mappedEntries}
        </div>
    )
}

export default connect(state=>state, {})(Display);
