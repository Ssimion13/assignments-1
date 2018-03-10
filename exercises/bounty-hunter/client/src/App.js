import React, {Component} from 'react';
import BountyControls from './BountyControls';

const App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="app">
                <h1>Bounty Hunter Hit List</h1>
                <br/>
                <BountyControls />
            </div>
        )
    }
}

export default App;
