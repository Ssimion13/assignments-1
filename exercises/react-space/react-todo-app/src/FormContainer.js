import React, {Component} from "react";
import Form from './Form';

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            description: "",
            price: "",
            title: "",
            imgUrl: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateTodoItems(this.state);
        this.setState({
            id: "",
            description: "",
            price: "",
            title: "",
            imgUrl: ""
        })
    }

    render() {
        return(
            <div>
                <Form
                    info={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.props} />
            </div>
        )
    }
}

export default FormContainer;
