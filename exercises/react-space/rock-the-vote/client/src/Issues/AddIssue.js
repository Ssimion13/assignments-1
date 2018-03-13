import React, {Component} from 'react';

class AddIssue extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            isAdding: false
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        console.log(this.state);
        this.props.addNewIssue(this.state);
        this.setState({
            title: "",
            description: "",
            isAdding: false
        })

    }

    render() {
        return (
            <div>
                <form className="inputForm">
                    <button>Add New Issue</button>
                    <textarea
                        onChange={this.handleChange}
                        value={this.title}
                        type="text"
                        name= "title"
                        id="title"
                        placeholder="Enter Title"
                    />
                    <textarea
                        onChange={this.handleChange}
                        value={this.description}
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

export default AddIssue;
