import React, {Component} from 'react';
import axios from 'axios';
import './index.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            peopleToHit: []
        }


    }

    componentDidMount() {
        axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
            this.setState({peopleToHit: response.data});
        })
    }

    render() {
        const mappedPeopleToHit = this.state.peopleToHit.map((person, i) => {
            return (
                <div>
                    <img src={person.image}/>
                    <h1 key={person.name+i}>{person.name}</h1>
                </div>
            )
        })
        return (
            <div>
                <div className="container">{ mappedPeopleToHit }</div>
            </div>
        )
    }
}

export default App;
