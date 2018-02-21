import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.addOne = this.addOne.bind(this)
        this.subtractOne = this.subtractOne.bind(this)
        this.double = this.double.bind(this)
        this.triple = this.triple.bind(this)
        this.zeroOut = this.zeroOut.bind(this)
        this.squareRoot = this.squareRoot.bind(this)
    }

    addOne() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    subtractOne() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    double() {
        this.setState(prevState => {
            return {
                count: prevState.count * 2
            }
        })
    }

    triple() {
        this.setState(prevState => {
            return {
                count: prevState.count * 3
            }
        })
    }

    squareRoot() {
        this.setState(prevState => {
            return {
                count: Math.sqrt(Math.abs(prevState.count))
            }
        })
    }

    zeroOut() {
        this.setState(prevState => {
            return {
                count: prevState.count * 0
            }
        })
    }

    render() {
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.addOne}>+</button>
            <button onClick={this.subtractOne}>-</button>
            <button onClick={this.double}>X2</button>
            <button onClick={this.triple}>X3</button>
            <button onClick={this.squareRoot}>SqRt</button>
            <button onClick={this.zeroOut}>zero out</button>
            </div>
        )
    }
}

export default App;
