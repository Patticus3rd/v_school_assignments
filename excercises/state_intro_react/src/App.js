import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      counter: 0,
      color: "yellow"
    }
    this.handleClick = this.handleClick.bind(this)//bindings go here
    this.reset = this.reset.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }

  handleClick(e){
    
    this.setState((prevState) => {
      return{
        counter: name === "add" ? prevState.counter + 1 : prevState.counter -1
      }
    })
  }

  reset() {
    this.setState({
      counter: 0
    })
  }

  changeColor(){
    this.setState((prevState) => {
      return {
        color: prevState.color === "yellow" ? "maroon" : "yellow"
      }
    })
  }

  render() {
    let { counter, color } = this.state; //this is the destructuring part 
    let boxStyle = {backgroundColor: color}
    return (
      <div>
        <button name="add" onClick={this.handleClick}>Add</button>
        <button name="subtract" onClick={this.handleClick}>Subtract</button>
        <button name="reset" onClick={this.reset}>reset</button>
        <p>{counter}</p>


        <div style={boxStyle} className="box" onMouseOver={this.changeColor} onMouseOut={this.changeColor}></div>
      </div>
    );
  }
}

export default App;
