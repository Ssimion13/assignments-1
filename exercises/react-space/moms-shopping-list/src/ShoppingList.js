import React, {Component} from 'react';
import Form from './Form';
import ItemsList from './ItemsList';

class ShoppingList extends Component {
    constructor() {
        super();
        this.state = {
            entry: "",
            items: {
                completed: false,
                text: "",
                id: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleItemDone = this.handleItemDone.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState(prevState => {
            return {
                entry: "",
                items: [...prevState.items, prevState.entry]
            }
        });
    }

    handleDeleteAll() {
        this.setState(() => {
            return {
                entry: "",
                items: []
            }
        });
    }

    handleItemDelete(entry) {
        const newItemsList = this.state.items.filter(item => {
            return item !== entry;
        })
        this.setState({
            entry: "",
            items: newItemsList
        })
    }

    handleItemDone(entry) {
        const newItemsList = this.state.items.map(item => {
                return item === entry ? item.strike() : item;
        })
        this.setState({
            entry: "",
            items: newItemsList
        })
    }

    render() {
        return (
            <div>
                <Form
                    inputs={this.state}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
            <button onClick={this.handleDeleteAll} className="del">DELETE ALL</button>
                <ItemsList
                    groceryItems={this.state}
                    handleItemDelete={this.handleItemDelete}
                    handleItemDone={this.handleItemDone}
                />
            </div>
        )
    }
}

export default ShoppingList;
