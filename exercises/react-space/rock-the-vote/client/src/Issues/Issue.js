import React, {Component} from 'react';
import { connect } from 'react-redux';

import { deleteIssue, putIssue } from '../redux/issues';

class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.info.title,
            description: props.info.description,
            isEditing: false
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleDelete = (e) => {
        this.props.deleteIssue(this.props.info._id);
    }

    handleEdit = () => {
        this.setState({isEditing: true});
    }

    handleEditSave = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const description = this.state.description;
        this.setState({
            title: "",
            description: "",
            isEditing: false
        });
        this.props.putIssue(this.props.info._id, {title, description});
    }

    handleCancel = () => {
        this.setState({isEditing: false});
    }

    render() {
        return (
            <div className="issue">
                    {!this.state.isEditing ?
                        <div>
                            <h3>{this.props.info.title}</h3>
                            <h3>{this.props.info.description}</h3>
                        </div>
                    :
                    <form>
                        <div>
                            <textarea
                                onChange={this.handleChange}
                                value={this.state.title}
                                type="text"
                                name= "title"
                                id="title"
                                placeholder={this.props.info.title}
                            />
                            <textarea
                                onChange={this.handleChange}
                                value={this.state.description}
                                type="text"
                                name= "description"
                                id="description"
                                placeholder={this.props.info.description}
                            />
                            <button type="button" onClick={this.handleEditSave}>Save Edits</button>
                            <button type="button" onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </form>
                    }
                <button>UP</button>
                <button>DOWN</button>
                <p>Up Votes: {this.props.info.vote.up}</p>
                <p>Down Votes: {this.props.info.vote.down}</p>
                <div>
                    <button className="remove" onClick={this.handleDelete}>REMOVE</button>
                    <button className="edit" onClick={this.handleEdit}>EDIT</button>
                </div>
            </div>
        )
    }
}

export default connect(state => state, { deleteIssue, putIssue })(Issue);
