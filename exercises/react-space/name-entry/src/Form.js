import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            names: []
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.persist();
        e.preventDefault();
        this.setState((prevState) => {
            return {
                name: "",
                names: [...prevState.names, prevState.name]
            }
        });
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const mappedPeople = this.state.names.map((person) => {
            return (
                <li>
                    <h3>{person}</h3>
                </li>
            )
        })
        return (
            <form onSubmit={this.handleSubmit}>
                Enter your name:
                <input
                    onChange={this.handleChange}
                    value={this.state.name}
                    name="name"
                />
                <h1>{this.state.name}</h1>
                <ol>
                    {mappedPeople}
                </ol>
            </form>
        )
    }
}

export default Form;
