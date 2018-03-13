import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import About from './About'

const App = props => {
    return (<div className="App">
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </Switch>
    </div>);
}

export default App;
