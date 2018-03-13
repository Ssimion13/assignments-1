import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';

import IssuesList from './Issues/IssuesList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="./about" component={About}/>
          </Switch>
          <IssuesList />
      </div>
    );
  }
}

export default App;
