import React, { Component } from 'react';
import axios from 'axios';

const repsURL = "http://localhost:9000/republicans"

class Dems extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    componentDidMount(){
        axios.get(repsURL)
        .then((response) => {
            console.log(response)
            this.setState({
                articles: response.data,
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                test
            </div>
        )
    }
}

export default Dems;