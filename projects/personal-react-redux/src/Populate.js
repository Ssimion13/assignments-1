import React from 'react';
import axios from 'axios';

let breeds = [];

const Populate = () => {
    axios.get("https://dog.ceo/api/breeds/list/all").then(response => {
        breeds = response.data;
    })
    console.log(breeds);
    let mappedBreeds = breeds.map((breed, i) => {
        return <option>breed</option>
    })
    return (
        <div>
            {mappedBreeds}
        </div>
    )
}

export default Populate;
