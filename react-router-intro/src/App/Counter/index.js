import React, { Component } from 'react';

class Counter extends Component{
    constructor(props){
        super();
        this.state = {
            counter: 0
        }
        this.add = this.add.bind(this)
        this.reset = this.reset.bind(this)
    } 
    
    componentDidUpdate(){
        alert("I DID IT")
    }

    add(){ 
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    reset() {
        this.setState({
            counter: 0
        })
    }
    
    render() {
       let { counter } = this.state;
        return (
            <div>
                <p>{counter}</p>
                <button onClick={this.add}>Add</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Counter;