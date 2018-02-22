import React, {Component} from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

const Styled = styled.div `
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}

.App-title {
  font-size: 1.5em;
}

.App-intro {
  font-size: large;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`

const Image = styled.img`
    :hover {
        border: 15px solid black;
        height: 300px;
        width: 300px;
    }
`

class App extends Component {
    render() {
        return (
            <Styled>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit
                        <code>src/App.js</code>
                        and save to reload.
                    </p>
                    <Image src="https://images.unsplash.com/photo-1467993195535-d1d849e4793c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73273b771256106eedce40884f7f0221&auto=format&fit=crop&w=1350&q=80"></Image>
                </div>
            </Styled>);
    }
}

export default App;
