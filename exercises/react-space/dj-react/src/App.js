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
        this.handleButtonFive = this.handleButtonFive.bind(this);
        this.handleButtonSix = this.handleButtonSix.bind(this);
        this.handleButtonSeven = this.handleButtonSeven.bind(this);
        this.handleButtonEight = this.handleButtonEight.bind(this);
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

    handleButtonFive() {
        this.setState(prevState=>{
            return {colors: ["yellow", prevState.colors[1], prevState.colors[2], prevState.colors[3]]}
        })
    }

    handleButtonSix() {
        this.setState(prevState=>{
            return {colors: [prevState.colors[0], "orange", prevState.colors[2], prevState.colors[3]]}
        })
    }

    handleButtonSeven() {
        this.setState(prevState=>{
            return {colors: [prevState.colors[0], prevState.colors[1], "red", prevState.colors[3]]}
        })
    }

    handleButtonEight() {
        this.setState(prevState=>{
            return {colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "brown"]}
        })
    }

    render () {
        return (
            <div className="app">
                <Squares colors={this.state.colors}/>
                <br/><br/>
                <div className="buttons">
                    <button onClick={this.handleButtonOne}>Change All</button>
                    <button onClick={this.handleButtonTwo}>Change Top</button>
                    <button onClick={this.handleButtonThree}>Left Blue</button>
                    <button onClick={this.handleButtonFour}>Right Blue</button>
                    <button onClick={this.handleButtonFive}>Upper Left</button>
                    <button onClick={this.handleButtonSix}>Upper Right</button>
                    <button onClick={this.handleButtonSeven}>Bottom Left</button>
                    <button onClick={this.handleButtonEight}>Bottom Right</button>
                </div>
            </div>
        )
    }
}

export default App;
