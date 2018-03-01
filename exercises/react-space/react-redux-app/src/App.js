import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, incrementBy} from 'redux';

import './index.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.incrementBy(this.state.input);
        this.setState({input: ""});
    }

    render() {
        return (<div className="App">
            <h1>Title</h1>
            <button onClick={this.props.something}>something to do</button>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} name="input" onChange={this.handleChange}/>
                <button>increment by</button>
            </form>
        </div>);
    }
}

export default connect(state => state, {increment, incrementBy })(App);
