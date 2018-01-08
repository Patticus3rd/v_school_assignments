import React, { Component } from 'react';
import EditForm from './EditForm';


function Item(props){
    let { size, color, type, deleteItem, index, editItem } = props;
    return(
        <div>
           <h2>{type}</h2>
           <h2>{size}</h2>
            <h3>{color}</h3>
            <button onClick={ ()=> deleteItem(index)}>X</button>
            <EditForm {...props}> </EditForm>
        </div>
    )
}

export default Item;