import React, { Component } from 'react';
import './index.css'


function Card(props) {
    let { place, price, timeToGo } = props
    return(
        <div className="wrapper">
            <div className="flexsomething">

            <h1>{place}</h1>
            <h2>{price}</h2>
            <h3>{timeToGo}</h3>
            </div>
        </div>
    )
}

export default Card;