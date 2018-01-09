import React, { Component } from 'react';

function Card(props){
    let { name, image } = props;
    return(
        <div>
            <h1>{name}</h1>
            <img src={image} alt=""/>
        </div>
    )
} 

export default Card;