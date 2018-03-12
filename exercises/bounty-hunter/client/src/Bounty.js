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
            <div className="bounty">
                <p>First Name: {this.props.info.firstName}</p>
                <p>Last Name: {this.props.info.lastName}</p>
                <p>Living: {this.props.info.living}</p>
                <p>Bounty: {this.props.info.bountyAmount}</p>
                <p>Type: {this.props.info.type}</p>
            </div>
        )
    }
}

export default Bounty;
