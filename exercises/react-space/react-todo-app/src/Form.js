import React from "react";

const Form = props => {

 return(
    <form >
        <p>Your ToDo List! Add, remove or make changes:</p><br/><br/>
        <input
            onChange={props.handleChange}
            value={props.info.title}
            type="text"
            name= "title"
            id="title"
        />Title
        <br/><br/>
        <input
            onChange={props.handleChange}
            value={props.info.description}
            type="text"
            name= "description"
            id="description"
        />Description
        <br/><br/>
        <input
            onChange={props.handleChange}
            value={props.info.price}
            type="text"
            name= "price"
            id="price"
        />Price
        <br/><br/>
        <input
            onChange={props.handleChange}
            value={props.info.imgUrl}
            type="text"
            name= "imgUrl"
            id="imgUrl"
        />Image URL
        <br/><br/>
        <button id="add" onClick={props.handleSubmit}>Add New Entry</button>
        <button id="delete" onClick = {props.deleteTodoItems}>Delete All Items</button>
        <button id="update">Submit Changes</button>
        <div id="myDiv"></div>
    </form>
 )
}

export default Form;
