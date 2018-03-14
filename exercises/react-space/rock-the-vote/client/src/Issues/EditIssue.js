import React, {Component} from 'react';
import { connect } from 'react-redux';

import { putIssue } from '../redux/issues';

class EditIssue extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            isChanging: false
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const desc = this.state.description;
        this.setState({
            title: "",
            description: "",
            isAdding: false
        });
        this.props.postNewIssue({title: title, description: desc});
    }

    render() {
        return (
            <div>
                <form className="editForm" onSubmit={this.handleSubmit}>
                    <button className="editButton">Add New Issue</button>
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
                </form>
            </div>
        )
    }
}

export default connect(state => state, { putIssue })(EditIssue);
