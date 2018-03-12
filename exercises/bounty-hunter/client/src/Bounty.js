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
        console.log(this.props.info);
        return (
            <div className="bounty">
                <p>
                    {this.props.info}
                </p>
            </div>
        )
    }
}

export default Bounty;
