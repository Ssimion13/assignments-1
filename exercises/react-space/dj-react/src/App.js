import React, {Component} from 'react';
import Squares from './Squares';

class App extends Component {

    constructor() {
        super();
        this.state = {
            colors: ['white', 'white', 'white', 'white']
        }
        this.handleButtonOne = this.handleButtonOne.bind(this);
        this.handleButtonTwo = this.handleButtonTwo.bind(this);
        this.handleButtonThree = this.handleButtonThree.bind(this);
        this.handleButtonFour = this.handleButtonFour.bind(this);
    }

    handleButtonOne() {
        this.setState(prevState=>{
            const newColor = prevState.colors[0] === "white" ? "black" : "white";
            return {colors: [newColor, newColor, newColor, newColor]}
        })
    }

    handleButtonTwo() {
        this.setState(prevState=>{
            return {colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]}
        })
    }

    handleButtonThree() {
        this.setState(prevState=>{
            return {colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]}
        })
    }

    handleButtonFour() {
        this.setState(prevState=>{
            return {colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]}
        })
    }

    render () {
        return (
            <div className="app">
                <Squares colors={this.state.colors}/>
                <br/><br/>
                <button onClick={this.handleButtonOne}>Change All</button>
                <button onClick={this.handleButtonTwo}>Change Top</button>
                <button onClick={this.handleButtonThree}>Bottom Left</button>
                <button onClick={this.handleButtonFour}>Bottom Right</button>
            </div>
        )
    }
}

export default App;
