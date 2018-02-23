import React from 'react';

function Form(props) {

        return (
            <form onSubmit={props.handleSubmit}>
                Enter an item to add:
                <input
                    type="text"
                    onChange={props.handleChange}
                    value={props.inputs.entry}
                    name="entry"
                />
                <br/><br/>
                <button>Submit</button>
            </form>
        )
}

export default Form;
