import React, { Component } from 'react';
import PicForm from './PicForm';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            pictures: []
        }
        this.addPic = this.addPic.bind(this)
    }
addPic(pic){
    this.setState((prevState) => {
        return{
            pictures: [...prevState.pictures, pic]
        }
    })
}

    render(){
        return (
            <div>
                <PicForm addPic={this.addPic}>
                </PicForm>
            </div>
        )

    }
}

export default Gallery;