import React, { Component } from "react";
import superheros from '../superheros.json';
import './superHero.css';


function SuperHero (props) {
    let { name, catchphrase, imgUrl, display, index } = props;
    return (
        <div className="cards">
            <div className="side">
            <h1>{name}</h1>
            <img onClick= {() => display(index)} src={imgUrl}></img>
            </div>
        </div>
    )
}   


export default SuperHero;