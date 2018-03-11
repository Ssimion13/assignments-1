import React, {Component} from 'react';

class Bounty extends Component {
    constructor() {
        super();
        this.state = {
            isEditing: false,
            isExpanded: false,
            firstName: "",
            lastName: "",
            type: "",
            bountyAmount: ""
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
