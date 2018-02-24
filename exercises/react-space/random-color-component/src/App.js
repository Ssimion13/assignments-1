import React, {Component} from 'react';
import axios from 'axios';
import Box from './Box';
import './index.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            color: ""
        }
    }

    componentDidMount() {
        axios.get("http://www.colr.org/json/color/random").then(response=>{
            this.setState({color: response.data.new_color});
        })
    }

    render() {
        return (
            <div className="container">
                <Box color={this.state.color}/>
            </div>
        )
    }
}

export default App;
