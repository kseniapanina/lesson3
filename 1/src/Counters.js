import React, { Component, Coponent } from 'react'
export default class Counters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }
    decrement() {
        this.setState(state => ({
            count: state.count - 1
        }));
    }
    render() {
        return(
            <div>
                <button onClick = {this.increment}>+</button>
                <button onClick = {this.decrement}>-</button>
                <h1>Count:{this.state.count} </h1>
            </div>
        );
    }
}
