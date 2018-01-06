import React, { Component } from "react";
import superheros from '../superheros.json';
import './superHero.css';


function SuperHero (props) {
    let { name, catchphrase, imgUrl, display, index } = props;
    return (
        <div className="wrapper">
            <div >
            <h1 className="cards">{name}</h1>
            <img onClick= {() => display(index)} src={imgUrl}></img>
            </div>
        </div>
    )
}   


export default SuperHero;