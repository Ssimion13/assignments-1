import React, {Component} from "react";


class DisplayData extends Component {
    constructor() {
        super();
        this.state={
            isEditing: false
        }
    }

    editButton = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    render() {
        let mappedData = this.props.todoItems.map((item, i) => {
            return (
                <div  key={item.title+i}>
                    <img src={item.imgUrl} alt="image"/>
                    <h3 >{item.title}</h3>
                    <h5> {item.price} </h5>
                    <h6>{item.description}</h6>
                    <h5> {item._id} </h5>
                    <button onClick={()=>this.props.deleteTodoItem(item._id)}>Delete</button>
                    <button onClick={this.editButton}>edit</button>
                </div>
            )
        })

        return(
            !this.state.isEditing?
            <div>
                {mappedData}
            </div>
            :
            <form>
                <h1>Edit Form</h1>
                <input
                    onChange={this.props.handleChange}
                    value={this.props.title}
                    type="text"
                    name= "title"
                    id="title"
                />Title
                <br/><br/>
                <input
                    onChange={this.props.handleChange}
                    value={this.props.description}
                    type="text"
                    name= "description"
                    id="description"
                />Description
                <br/><br/>
                <input
                    onChange={this.props.handleChange}
                    value={this.props.price}
                    type="text"
                    name= "price"
                    id="price"
                />Price
                <br/><br/>
                <input
                    onChange={this.props.handleChange}
                    value={this.props.imgUrl}
                    type="text"
                    name= "imgUrl"
                    id="imgUrl"
                />Image URL
                <br/><br/>
                <button onClick={()=>{this.props.completeTodoItem(this.props.id, theNewTodo)}, this.editButton}>Item Complete</button>
            </form>
         )
        }
    }

export default DisplayData;
