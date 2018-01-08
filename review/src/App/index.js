import React from 'react';
import DecorList from '../App/DecorList';
import './index.css';

function App(props){
    return(
        <div>
            <h1 className="title">Furniture Store</h1>
            <div className="cardItem">
            <DecorList ></DecorList>
            </div>
        </div>
    )
}

export default App;