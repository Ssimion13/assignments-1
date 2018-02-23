import React from 'react';
import Form from './Form';

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

    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        return
            <div>
                <Form handleSubmit={this.handleSubmit}/>
                <ItemsList />
            </div>
    }
}

export default ShoppingList;
