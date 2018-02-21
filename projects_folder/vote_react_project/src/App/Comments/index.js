import React, { Component } from 'react';
import CommentForm from './CommentForm';

class Comments extends Component{
    constructor(props){
        super(props);
        this.state = {
            showComments: false
        }
    }
    render(){
        return(
            <div>
                <CommentForm />
            </div>
        )
    }
}

export default Comments;