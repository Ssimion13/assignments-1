import React, {Component} from 'react';
import axios from 'axios';

import Bounty from './Bounty';
import BountyControls from './BountyControls';

class App extends Component {
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
        this.handleDeleteBounty = this.handleDeleteBounty.bind(this);
        this.handleAddBounty = this.handleAddBounty.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    componentDidMount() {
        axios.get("/bounty").then(response => {
            this.setState({bounties: response.data});
        });
    };

    handleDeleteBounty(id) {

    }

    handleAddBounty(e) {

    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleEditSubmit(e) {
        e.preventDefault();
        this.setState();
    }

    render() {
        
        const mappedBounties = this.state.bounties.map(bounty => {
            return (
                <Bounty
                    key={bounty._id}
                    info={bounty}
                    handleDeleteBounty={this.handleDeleteBounty}
                    handleEditSubmit={this.handleEditSubmit}
                />
            )
        })

        return (
            <div className="app">
                <h1>Bounty Hunter Hit List</h1>
                <br/>
                    <div className="bountyControls">
                        <BountyControls
                            handleAddBounty={this.handleAddBounty}
                            handleChange={this.handleChange}
                            info={this.state}
                        />
                    </div>
                    <br/>
                    <div className="bountyContainer">
                        {mappedBounties}
                    </div>
            </div>
        )
    }
}

export default App;
