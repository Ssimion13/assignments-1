import React from 'react';
import Populate from './Populate';
import { connect } from 'react-redux';

import { getRandomPic } from './redux';

import DisplayPic from './DisplayPic';

const Breeds = () => {
    return (
        <div className="breeds">
            <Populate />
            <div className="breedsContent">
                <DisplayPic />
            </div>
        </div>
    )
}

export default connect(null, { getRandomPic })(Breeds);
