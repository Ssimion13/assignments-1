import React, {Component} from 'react';
import SignupForm from "./SignupForm";

class SignupFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            fName: "",
            lName: "",
            email: "",
            password: "",
            passwordOkay: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("Form submitted");
        this.setState({
            fName: "",
            lName: "",
            email: "",
            password: "",
            passwordOkay: ""
        })
    }

    render() {
        return (
                <SignupForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    // data={this.state}
                    {...this.state} //pass into signupForm all of the properties of state
                />
            )
        }
}

export default SignupFormContainer;
