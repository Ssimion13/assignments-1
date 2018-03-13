import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import About from './About'

import IssuesList from './Issues/IssuesList';

const App = props => {
    componentDidMount()
    return (<div className="App">
        <Navbar/>
        <Switch>
            <Route exact="exact" path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </Switch>
        <IssuesList/>
    </div>);
}

export default App;
