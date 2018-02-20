import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Pet extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.breed}</h3>
            </div>
        )
    }
}

Pet.propTypes = {
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired
}

export default Pet;
