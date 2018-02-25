import React from 'react';

function Form(props) {

        return (
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    onChange={props.handleChange}
                    value={props.inputs.entry}
                    name="entry"
                />
                <button>ADD</button>
            </form>
        )
}

export default Form;
