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
        this.half = this.half.bind(this)
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

    half() {
        this.setState(prevState => {
            return {
                count: Math.round(prevState.count / 2)
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
        const numStyle = {};
        if (this.state.count > -1) {
            numStyle.color = "black";
        } else {
            numStyle.color = "purple";
        }
        const containerStyle = {};
        if (this.state.count > -1) {
            containerStyle.backgroundColor = "lightblue";
        } else {
            containerStyle.backgroundColor = "red";
        }

        return (
            <div className="masterContainer" style={containerStyle}>
                <h1 style={numStyle}>{this.state.count}</h1>
                <div className="container">
                    <div className="buttons">
                        <button onClick={this.addOne}>+</button>
                        <button onClick={this.subtractOne}>-</button>
                        <button onClick={this.double}>X2</button>
                        <button onClick={this.half}>/2</button>
                        <button onClick={this.squareRoot}>SqRt</button>
                        <button onClick={this.zeroOut}>zero out</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
