import React from 'react';

const Form = props => {
    return (
        <div>
            <form>
                <input onChange={props.handleChange}
                        value={props.imgUrl}
                        type="text"
                        name= "url"
                        id="imgUrl"
                        placeholder="Enter Url"
                        />
                <input onChange={props.handleChange}
                        value={props.title}
                        type="text"
                        name= "title"
                        id="title"
                        placeholder="Enter Title"
                        />
                <input onChange={props.handleChange}
                        value={props.description}
                        type="text"
                        name= "description"
                        id="description"
                        placeholder="Enter Description"
                        />
                    <br/><br/>
                <button id="submit" onClick={props.handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form;
