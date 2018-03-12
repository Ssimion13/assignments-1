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
        console.log(this.props.info.firstName);
        return (
            <div className="bounty">
                <p>

                </p>
            </div>
        )
    }
}

export default Bounty;
