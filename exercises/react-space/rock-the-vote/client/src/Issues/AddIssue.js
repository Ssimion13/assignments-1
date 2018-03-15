import React, {Component} from 'react';
import { connect } from 'react-redux';

import { postNewIssue } from '../redux/issues';

class AddIssue extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            isAddingIssue: false
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleAddIssue = () => {
        this.setState({isAddingIssue: true});
    }

    handleIssueSave = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const description = this.state.description;
        this.setState({
            title: "",
            description: "",
            isAddingIssue: false
        });
        this.props.postNewIssue({title, description});
    }

    handleIssueCancel = () => {
        this.setState({isAddingIssue: false});
    }

    render() {
        return (
            <div className="addIssueForm">
                {!this.state.isAddingIssue ?
                    <button className="inputButton" onClick={this.handleAddIssue}>Add New Issue</button>
                :
                    <form className="inputForm">
                        <textarea
                            onChange={this.handleChange}
                            value={this.state.title}
                            type="text"
                            name= "title"
                            id="title"
                            placeholder="Enter Title"
                        />
                        <textarea
                            onChange={this.handleChange}
                            value={this.state.description}
                            type="text"
                            name= "description"
                            id="description"
                            placeholder="Enter Description"
                        />
                        <button type="button" onClick={this.handleIssueSave}>Save</button>
                        <button type="button" onClick={this.handleIssueCancel}>Cancel</button>
                    </form>
                }
            </div>
        )
    }
}

export default connect(state => state, { postNewIssue })(AddIssue);
