import React, {Component} from 'react';
import Form from './Form';

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favoriteFood: "",
            aboutInfo: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        console.log(e)
        e.preventDefault();
        this.props.updateBadge(this.state);
        alert("form submitted");
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favoriteFood: "",
            aboutInfo: ""
        })
    }

    render() {
        return (
            <div className="formContainer">
                <Form
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state} //pass into signupForm all of the properties of state
                />
            </div>
        )
    }
}

export default FormContainer;
