import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addNewPost} from './redux/entries.js';
import Form from './Form';
import Display from './Display';

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

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addNewPost(this.state);
    }

    render() {
        return (
            <div className="FormContainer">
                <Form
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}
                />
                <div>
                    <Display />
                </div>
            </div>
        )
    }
}

export default connect(state => state, { addNewPost })(FormContainer);
