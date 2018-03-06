import React, {Component} from 'react';
import Form from './Form';
import ItemsList from './ItemsList';

class ShoppingList extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            items: [],
            isCompleted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleItemDone = this.handleItemDone.bind(this);
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text !== "") {
            this.setState(prevState => {
                return {
                    text: "",
                    items: [...prevState.items, prevState.text]
                }
            });
        }
    }

    handleDeleteAll() {
        this.setState(() => {
            return {
                text: "",
                items: [],
                isCompleted: false
            }
        });
    }

    handleItemDelete(id) {
        const newItemsList = this.state.items.filter(item => {
            return item.id !== id;
        })
        this.setState({
            text: "",
            items: newItemsList
        })
    }

    handleItemDone(id) {
        this.setState(isCompleted: !this.state.isCompleted);
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
