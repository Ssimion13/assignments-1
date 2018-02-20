import React, {Component} from 'react';
import PropTypes from "prop-types";
import Pet from './Pet';

class Friend extends Component {
    render() {
        const mappedPets = this.props.pets.map((pet, i) => {
            return <Pet name={pet.name} breed={pet.breed} key={i + pet.name}/>
        })
        return (
            <div className="friendEntry">
                <h1>{this.props.name}</h1>
                <h3>{this.props.age}</h3>
                {mappedPets}
            </div>
        )
    }
}

Friend.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    pets: PropTypes.array
}

export default Friend;
