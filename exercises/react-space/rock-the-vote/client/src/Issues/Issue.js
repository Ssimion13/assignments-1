import React, {Component} from 'react';
import { connect } from 'react-redux';

import { deleteIssue, putIssue, incrementUpVote, incrementDownVote } from '../redux/issues';

class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.info.title,
            description: props.info.description,
            comment: "",
            isEditing: false,
            isAddingComment: false
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

    handleEditCancel = () => {
        this.setState({isEditing: false});
    }

    handleComment = () => {
        this.setState({isAddingComment: true});
    }

    handleCommentSave = (e) => {
        e.preventDefault();
        const newComments = [...this.props.info.comments, this.state.comment];
        this.setState({
            comment: "",
            isAddingComment: false
        });
        this.props.putIssue(this.props.info._id, {comments: newComments});
    }

    handleCommentCancel = (e) => {
        this.setState({isAddingComment: false});
    }

    handleUpVote = (e) => {
        this.props.incrementUpVote(this.props.info._id,
                                    this.props.info.vote.up,
                                    this.props.info.vote.down);
    }

    handleDownVote = (e) => {
        this.props.incrementDownVote(this.props.info._id,
                                    this.props.info.vote.up,
                                    this.props.info.vote.down);
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
                    <form className="editForm">
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
                            <button type="button" onClick={this.handleEditSave}>Save</button>
                            <button type="button" onClick={this.handleEditCancel}>Cancel</button>
                        </div>
                    </form>
                    }
                <button onClick={this.handleUpVote}>UP</button>
                <button onClick={this.handleDownVote}>DOWN</button>
                <p>Up Votes: {this.props.info.vote.up}</p>
                <p>Down Votes: {this.props.info.vote.down}</p>
                <div>
                    <button className="remove" onClick={this.handleDelete}>REMOVE</button>
                    <button className="edit" onClick={this.handleEdit}>EDIT</button>
                </div>

                {!this.state.isAddingComment ?
                    <div>
                        {this.props.info.comments.map(comment => {
                            return <h3>{comment}</h3>
                        })}
                    </div>
                    :
                    <form className="commentForm">
                        <div>
                            <textarea
                                onChange={this.handleChange}
                                value={this.state.comment}
                                type="text"
                                name= "comment"
                                id="comment"
                                placeholder="Add comment here"
                            />
                        <button type="button" onClick={this.handleCommentSave}>Save</button>
                        <button type="button" onClick={this.handleCommentCancel}>Cancel</button>
                        </div>
                    </form>
                }
                <button className="commentButton" onClick={this.handleComment}>ADD COMMENT</button>
            </div>
        )
    }
}

export default connect(state => state, { deleteIssue,
                                        putIssue,
                                        incrementUpVote,
                                        incrementDownVote })(Issue);
