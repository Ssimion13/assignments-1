import React from 'react';

const Form = props => {
    return (
        <div>
            <form>
                <input onChange={props.handleChange}
                        value={props.imgUrl}
                        type="text"
                        name= "imgUrl"
                        id="imgUrl"
                        />Image URL
                <input onChange={props.handleChange}
                        value={props.title}
                        type="text"
                        name= "title"
                        id="title"
                        />Image URL
                <input onChange={props.handleChange}
                        value={props.description}
                        type="text"
                        name= "description"
                        id="description"
                        />Image URL
                <button id="submit" onClick={props.handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form;
