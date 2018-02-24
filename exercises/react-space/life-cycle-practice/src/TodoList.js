import React, {Component} from 'react';
import axios from 'axios';

class TodoList extends Component{
    constructor() {
        super();
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        axios.get("https://swapi.co/api/people/").then(response=>{
            this.setState({people: response.data.results});
        })
    }

    render() {
        const mappedPeople = this.state.people.map((person, i)=>{
            return <div key={person.birth_year+i}>{person.name}</div>
        })
        return <div>{ mappedPeople }</div>
    }
}

export default TodoList;
