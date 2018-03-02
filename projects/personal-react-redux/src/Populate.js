import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {getRandomPic} from './redux';

class Populate extends Component {

    constructor() {
        super();
        this.state = {
            breedsList: [],
            selectedBreed: ""
        }
        this.handleGetPic = this.handleGetPic.bind(this);
    }

    componentDidMount() {
        axios.get("https://dog.ceo/api/breeds/list/all").then(response => {
            const breedsList = response.data.message;
            const breedsArr = Object.entries(breedsList)
            console.dir(breedsArr);
            let mapped = breedsArr.map(breed => {
                return {breed: breed[0], subBreed: breed[1]}
            })
            this.setState({breedsList: mapped});
        })
    }

    handleGetPic(e) {
        this.setState({[e.target.name]: e.target.value},
            ()=>this.props.getRandomPic(this.state.selectedBreed))
        ;
    }

    render() {
        let mappedBreedsArr = this.state.breedsList.map((breed, i) => {
            return <option value={breed.breed}>{breed.breed}</option>
        })
        return (
            <div className="select-style">
                <select name="selectedBreed" onChange={this.handleGetPic} value={this.state.selectedBreed}>
                    {mappedBreedsArr}
                </select>
            </div>
        )
    }
}

export default connect(state => state, { getRandomPic })(Populate);
