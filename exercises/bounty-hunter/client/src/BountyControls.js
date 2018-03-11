import React, {Component} from 'react';
import Bounty from './Bounty';

class BountyControls extends Component {
    constructor() {
        super();
        this.state = {
            isAddingBounty: false
        }
        this.handleAddingBounty = this.handleAddingBounty.bind(this);
    }

    handleAddingBounty() {

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
