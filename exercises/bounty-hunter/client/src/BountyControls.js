import React, {Component} from 'react';
import axios from 'axios';
import Bounty from './Bounty';

class BountyConsrols extends Component {
    constructor() {
        super();
        this.state = {
            bounties: [],
            firstName: "",
            lastName: "",
            living: "",
            bountyAmount: "",
            type: ""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/bounties").then(response => {
            const bountiesList = response.data.message;
            const bountiesArr = Object.entries(breedsList)
            let mapped = bountiesArr.map((bounty, i) => {
                return {
                    firstName: breed[0],
                    lastName: breed[1],
                    bountyAmount: breed[1],
                    type: breed[0],
                    key: breed[0]+i
                }
            })
            console.log(response);
            this.setState({bountiesList: response});
            console.log(this.state);
        })
    }

    handleChange(e) {
        this.setState([e.target.name]: e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div>

                <Bounty />
            </div>
        )
    }
}

export default BountyControls;
