import React, {Component} from 'react';
import FormContainer from './FormContainer';
import Badge from './Badge';
import './index.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {}
        }
        this.updateBadge = this.updateBadge.bind(this);
    }

    updateBadge(input) {
        this.setState({inputs: input});
    }

    render() {
        return (
            <div>
                <FormContainer updateBadge={this.updateBadge}/>
                <Badge {...this.state}/>
            </div>
        )
    }
}

export default App;
