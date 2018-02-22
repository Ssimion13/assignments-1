import React, {Component} from 'react';
import ItemsList from './ItemsList';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            item: ""
        }
    }

    render() {
        return
            <div>
                <ItemsList />
            </div>
    }
}

export default Form;
