import React from 'react';
import Populate from './Populate';

const Breeds = () => {
    return (
        <div className="breeds">
            <select>
                <Populate />
            </select>
                <div className="breedsContent">

                </div>
        </div>
    )
}

export default Breeds;
