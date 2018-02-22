import React, {Component} from 'react';
import ItemsList from './ItemsList';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            item: "",
            items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({item: e.target.item})
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('An item was submitted: ' + this.state.item);
    }

    render() {
        return (
            <form onClick={this.handleSubmit}>
                Enter an item to add:
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.item}
                    name="item"
                />
                <ItemsList />
            </form>
        )
    }
}

export default Form;
