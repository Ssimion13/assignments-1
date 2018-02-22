import React from 'react';

const SignupForm = props => {
    return (
        <form onClick={props.handleSubmit}>
            <label>Enter first name:
            <input
                type="text"
                onChange={props.handleChange}
                value={props.fName}
                name="fName"
            /></label>
            <br/>
            <label>Enter last name:
            <input
                type="text"
                onChange={props.handleChange}
                value={props.lName}
                name="lName"
            /></label>
            <br/>
            <label>Enter email address:
            <input
                type="email"
                onChange={props.handleChange}
                value={props.email}
                name="email"
            /></label>
            <br/>
            <label>Enter a password:
            <input
                type="password"
                onChange={props.handleChange}
                value={props.password}
                name="password"
            /></label>
            <br/>
            <label>Confirm the password:
            <input
                type="password"
                onChange={props.handleChange}
                value={props.passwordOkay}
                name="passwordOkay"
            /></label><br/>
            <button>Submit</button>
        </form>
    )
}

export default SignupForm;
