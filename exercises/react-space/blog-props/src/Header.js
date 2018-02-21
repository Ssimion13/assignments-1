import React, {Component} from 'react';
import Navbar from './Navbar';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div>
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default Header;
