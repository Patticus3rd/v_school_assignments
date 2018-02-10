import React, { Component } from 'react';
import firebase from 'firebase';


const imgFilter = firebase.storage().refFromURL('https://firebasestorage.googleapis.com/v0/b/snapseum.appspot.com/o/images%2Fasd.JPG?alt=media&token=18ced55f-45bf-4f62-8650-6ab6306a1a6c')

class Filters extends Component{
    constructor(){
        super();
        this.state = {
            images: ''
        }
    }

  

    render(){
        
        return(
            <div>
             test
            </div>
        )
    }
}

export default Filters;