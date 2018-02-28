import React, {Component} from 'react';

class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            title: props.info.title
        }
    }

    handleChange(e) {
        this.setState = {[e.target.name]: e.target.value};
    }

    editButton = () => {
        this.props.completeTodoItem(this.props._id);
        this.setState((prevState) => {
            return {isEditing: !prevState.isEditing};
        })
    }

    render() {
            return (
                <div>
                {!this.state.isEditing?
                <div>
                    <img src={this.props.item.imgUrl}/>
                    <h3>{this.props.item.title}</h3>
                    <h5>{this.props.item.price}</h5>
                    <h6>{this.props.item.description}</h6>
                    <h5> {this.props.item._id}</h5>
                    <button onClick={()=>this.props.deleteTodoItem(this.props.item._id)}>Delete</button>
                    <button onClick={this.editButton}>edit</button>
                </div>
            :
            <form>
                <h1>Edit Form</h1>
                <input
                    onChange={this.handleChange}
                    value={this.props.title}
                    type="text"
                    name= "title"
                    id="title"
                />Title
                <br/><br/>
                <input
                    onChange={this.handleChange}
                    value={this.props.description}
                    type="text"
                    name= "description"
                    id="description"
                />Description
                <br/><br/>
                <input
                    onChange={this.handleChange}
                    value={this.props.price}
                    type="text"
                    name= "price"
                    id="price"
                />Price
                <br/><br/>
                <input
                    onChange={this.handleChange}
                    value={this.props.imgUrl}
                    type="text"
                    name= "imgUrl"
                    id="imgUrl"
                />Image URL
                <br/><br/>
                <button onClick={this.editButton}>Item Complete</button>
            </form>
        }</div>)
    }
}

export default TodoComponent;
