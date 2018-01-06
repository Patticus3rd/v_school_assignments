import React, { Component } from 'react';
import Header from './Header';
import InBetween from './InBetween';
import './index.css';



function App(props) {
    return(
        <div className="app-wrapper">
            <Header>
            </Header>
            <InBetween>
            </InBetween>
        </div>
       
    )
}

export default App;