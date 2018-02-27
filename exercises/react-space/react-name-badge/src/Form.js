import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {
    return (
        <form onSubmit={props.handleSubmit} className="form">
            <div><input
                type="text"
                onChange={props.handleChange}
                value={props.firstName}
                name="firstName"
                placeholder="First Name"
            /></div>
            <div><input
                type="text"
                onChange={props.handleChange}
                value={props.lastName}
                name="lastName"
                placeholder="Last Name"
            /></div>
            <div><input
                type="email"
                onChange={props.handleChange}
                value={props.email}
                name="email"
                placeholder="Email"
            /></div>
            <div><input
                type="text"
                onChange={props.handleChange}
                value={props.birthPlace}
                name="birthPlace"
                placeholder="Place of Birth"
            /></div>
            <div><input
                type="phone"
                onChange={props.handleChange}
                value={props.phone}
                name="phone"
                placeholder="Phone"
            /></div>
            <div><input
                type="text"
                onChange={props.handleChange}
                value={props.favoriteFood}
                name="favoriteFood"
                placeholder="Favorite Food"
            /></div>
            <input
                type="textArea"
                onChange={props.handleChange}
                value={props.aboutInfo}
                name="aboutInfo"
                placeholder="Tell us about yourself"
            />
            <button>Submit</button>
        </form>
    )
}

Form.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthPlace: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    favoriteFood: PropTypes.string.isRequired,
    aboutInfo: PropTypes.string.isRequired
}

export default Form;
