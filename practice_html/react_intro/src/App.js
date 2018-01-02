import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // let randVar = "This is the text that you wrote"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dolphin Pants</h1>
        </header>
        {/* <p>This is the cool logo you see</p>
        <img src={logo} className="App-logo-exg" alt="logo" />
        <p className = "text">{randVar}</p> */}

      </div>
    );
  }
}

export default App;
