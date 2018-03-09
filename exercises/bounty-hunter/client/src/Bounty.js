import React, {Component} from 'react';

class Bounty extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleChange(e) {
        this.setState([e.target.name]: e.target.value);
    }

    handleSubmit(e) {

    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Bounty;
