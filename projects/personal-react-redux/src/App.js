import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Breeds from './Breeds';
import './styles.css';

const App = (props) => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/breeds" component={Breeds}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App;