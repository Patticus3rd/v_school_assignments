import React, { Component } from 'react';

function Character(props){
    let { name, skin_color } = props;
    return(
        <div>
            <h1>{name}</h1>
            <h3>{skin_color}</h3>
        </div>
    )
}

export default Character;