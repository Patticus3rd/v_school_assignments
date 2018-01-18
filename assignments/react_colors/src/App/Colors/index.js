import React, { Component } from 'react';
import axios from 'axios';

let clURL = "http://www.colr.org/json/color/random "

class Colors extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: ""
        }
    }

    componentDidMount(){
        axios.get(clURL)
        .then((response) => {
            let { results } = response
            this.setState(
                console.log(results)
            )
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default Colors;