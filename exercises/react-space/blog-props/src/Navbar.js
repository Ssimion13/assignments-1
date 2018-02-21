import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="start">
                    <a href="">Start Bootstrap</a>
                </div>
                <div>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SAMPLE POST</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;
