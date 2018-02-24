import React, {Component} from 'react';
import Form from './Form';
import ItemsList from './ItemsList';

class ShoppingList extends Component {
    constructor() {
        super();
        this.state = {
            entry: "",
            items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.persist();
        e.preventDefault();
        this.setState((prevState) => {
            return {
                entry: "",
                items: [...prevState.items, prevState.entry]
            }
        });
    }

    render() {
        return (
            <div>
                <Form
                    inputs={this.state}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
                <ItemsList
                    groceryItems={this.state}
                />
            </div>
        )
    }
}

export default ShoppingList;
