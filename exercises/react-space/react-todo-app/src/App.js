import React, {Component} from 'react';
import './styles.css';
import FormContainer from './FormContainer';
import DisplayData from './DisplayData';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todoItems: []
        }
        this.updateTodoItems = this.updateTodoItems.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
        this.completeTodoItem = this.completeTodoItem.bind(this);
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/ryan/todo").then(response => {
            this.setState({todoItems: response.data});
        });
    }

    updateTodoItems(input) {
        console.log(input);
        axios.post("https://api.vschool.io/ryan/todo/", input).then(response=>{
            this.setState(prevState => {
                return {todoItems: [...prevState.todoItems, response.data]}
            });
        })
        document.getElementById("title").focus();
    }
    deleteTodoItem(id){
        console.log(id);
        axios.delete("https://api.vschool.io/ryan/todo/" + id).then(response=>{
            this.setState(prevState => {
                const filteredTodos = prevState.todoItems.filter(todo=>{
                    return todo._id !== id;
                })
                return {todoItems: filteredTodos}
            })
        })

    }

    completeTodoItem(id){
        const indexOfItemToEdit = this.state.todoItems.findIndex((todo) => {
            return todo._id === id;
        })
        const isComplete = this.state.todoItems[indexOfItemToEdit].completed;

        axios.put("https://api.vschool.io/ryan/todo/" + id, {completed: !isComplete}).then(response=>{
            this.setState(prevState => {
                const copy = [...prevState.todoItems];
                copy.splice(indexOfItemToEdit, 1, response.data);
                return {todoItems: copy}
            })
        })
    }



    render() {
        return (
            <div>
                <FormContainer
                    updateTodoItems={this.updateTodoItems}
                    {...this.state}
                />
                <DisplayData
                    completeTodoItem={this.completeTodoItem}
                    deleteTodoItem={this.deleteTodoItem}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
