import React, {Component} from 'react';

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            url: "",
            title: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) = {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) = {
        e.preventDefault();

    }

    render() {
        return {
            <div>
                <Form
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}
                />
            </div>
        }
    }
}

export default FormContainer;
