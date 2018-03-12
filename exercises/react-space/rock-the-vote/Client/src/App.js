import React, { Component } from 'react';

import IssuesList from './IssuesList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Rock The Vote</h1>
          <IssuesList />
      </div>
    );
  }
}

export default App;
